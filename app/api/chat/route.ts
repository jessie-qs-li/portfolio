import Anthropic from "@anthropic-ai/sdk"
import { SYSTEM_PROMPT } from "@/lib/jessie"

export const runtime = "nodejs"

const MAX_MESSAGES = 24
const MAX_CHARS = 1500

// Simple per-IP rate limit: 10 requests per minute (in-memory, resets on redeploy).
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 10
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter(t => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > MAX_PER_WINDOW
}

type ChatMessage = { role: "user" | "assistant"; content: string }

const DEMO_REPLY =
  "(Demo mode: no API key is configured yet, so this is a canned reply.) " +
  "Once ANTHROPIC_API_KEY is set, I'll answer questions about Jessie for real: " +
  "her product and growth work at BoldVoice, her five hackathon wins, her HCI research at Columbia, and more."

function textStream(chunks: AsyncIterable<string> | Iterable<string>) {
  const encoder = new TextEncoder()
  return new Response(
    new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of chunks) controller.enqueue(encoder.encode(chunk))
        } catch {
          controller.enqueue(encoder.encode("\n\nSorry, something went wrong. Please try again."))
        }
        controller.close()
      },
    }),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  )
}

async function* demoChunks() {
  for (const word of DEMO_REPLY.split(/(?<= )/)) {
    yield word
    await new Promise(r => setTimeout(r, 18))
  }
}

// Appends the exchange to a Google Sheet via an Apps Script web app. Silent
// no-op when unconfigured, and never allowed to break a reply.
async function logToSheet(question: string, answer: string, turn: number) {
  const url = process.env.SHEET_WEBHOOK_URL
  if (!url) return
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.SHEET_WEBHOOK_SECRET ?? "",
        at: new Date().toISOString(),
        question,
        answer,
        turn,
      }),
    })
  } catch {
    // logging is best effort
  }
}

async function* claudeChunks(messages: ChatMessage[]) {
  const client = new Anthropic()
  const stream = client.messages.stream({
    model: "claude-opus-5",
    max_tokens: 1024,
    output_config: { effort: "low" },
    system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
    messages,
  })
  let answer = ""
  for await (const event of stream) {
    if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
      answer += event.delta.text
      yield event.delta.text
    }
  }
  const final = await stream.finalMessage()
  if (final.stop_reason === "refusal") {
    const refusal = "Sorry, I can't help with that one. Ask me anything about Jessie instead."
    answer += refusal
    yield refusal
  }
  // Awaited before the stream closes so the serverless function stays alive
  // long enough for the write to land.
  const question = messages[messages.length - 1]?.content ?? ""
  const turn = messages.filter(m => m.role === "user").length
  await logToSheet(question, answer, turn)
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local"
  if (rateLimited(ip)) {
    return new Response("Too many requests. Give it a minute.", { status: 429 })
  }

  let messages: ChatMessage[]
  try {
    const body = await req.json()
    messages = body.messages
    const valid =
      Array.isArray(messages) &&
      messages.length > 0 &&
      messages.length <= MAX_MESSAGES &&
      messages.every(
        m =>
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.length > 0 &&
          m.content.length <= MAX_CHARS,
      ) &&
      messages[messages.length - 1].role === "user"
    if (!valid) throw new Error("bad request")
  } catch {
    return new Response("Bad request.", { status: 400 })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return textStream(demoChunks())
  }
  return textStream(claudeChunks(messages))
}
