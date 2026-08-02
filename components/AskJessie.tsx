"use client"

import { useEffect, useRef, useState } from "react"

const STARTERS = [
  "What does Jessie do at BoldVoice?",
  "Tell me about her hackathon wins",
  "What is she like outside of work?",
]

const GREETING =
  "Hi, I'm JessieBot. Jessie hand-built me: Claude under the hood, streaming through a Next.js route " +
  "she wrote, rate-limited so you can't bankrupt her. I know her work inside out, from BoldVoice to " +
  "all five hackathon wins. What do you want to know?"

type Msg = { role: "user" | "assistant"; content: string }

export default function AskJessie() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const close = () => {
    setClosing(true)
    setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 190)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, busy])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const send = async (text: string) => {
    const question = text.trim()
    if (!question || busy) return
    setInput("")
    setBusy(true)
    const history: Msg[] = [...messages, { role: "user", content: question }]
    setMessages([...history, { role: "assistant", content: "" }])

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-24) }),
      })
      if (!res.ok || !res.body) {
        const detail = res.status === 429 ? await res.text() : "Something went wrong. Please try again."
        setMessages([...history, { role: "assistant", content: detail }])
        return
      }
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let acc = ""
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        acc += decoder.decode(value, { stream: true })
        setMessages([...history, { role: "assistant", content: acc }])
      }
    } catch {
      setMessages([...history, { role: "assistant", content: "Something went wrong. Please try again." }])
    } finally {
      setBusy(false)
      inputRef.current?.focus()
    }
  }

  return (
    <>
      <button
        type="button"
        className={open ? "ask-fab ask-fab--hidden" : "ask-fab"}
        onClick={() => setOpen(true)}
        aria-label="Chat with JessieBot"
      >
        <span className="ask-fab-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <i className="ask-live-dot" aria-hidden />
        </span>
        Ask JessieBot
      </button>

      {open && (
        <div className={closing ? "ask-panel ask-panel--closing" : "ask-panel"} role="dialog" aria-label="JessieBot chat">
          <div className="ask-head">
            <div>
              <div className="ask-title">JessieBot</div>
              <div className="ask-sub">Answers about Jessie, from her real experience</div>
            </div>
            <button type="button" className="ask-close" onClick={close} aria-label="Close chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="ask-scroll" ref={scrollRef} data-lenis-prevent>
            <div className="ask-msg">{GREETING}</div>
            {messages.length === 0 && (
              <div className="ask-starters">
                {STARTERS.map(s => (
                  <button key={s} type="button" className="ask-starter" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "ask-msg ask-msg--user" : "ask-msg"}>
                {m.content || <span className="ask-typing" aria-label="Thinking"><i /><i /><i /></span>}
              </div>
            ))}
          </div>

          <form
            className="ask-inputrow"
            onSubmit={e => {
              e.preventDefault()
              send(input)
            }}
          >
            <input
              ref={inputRef}
              className="ask-input"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  send(input)
                }
              }}
              placeholder="Ask a question..."
              maxLength={1500}
              aria-label="Your question"
            />
            <button type="submit" className="ask-send" disabled={busy || !input.trim()} aria-label="Send">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}
