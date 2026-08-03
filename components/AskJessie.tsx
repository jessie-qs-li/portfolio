"use client"

import { useEffect, useRef, useState } from "react"

// Suggestion pool: the first three are the opening starters; after each answer
// the next unasked ones surface so there is always a suggested follow-up.
const SUGGESTIONS = [
  "What does Jessie do at BoldVoice?",
  "Tell me about her hackathon wins",
  "What is she like outside of work?",
  "What has she shipped at the Spectator?",
  "What is her HCI research about?",
  "Tell me a fun fact about her",
  "What is her favorite movie?",
  "How do I get in touch with her?",
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
  const panelRef = useRef<HTMLDivElement>(null)

  const isSheet = () => window.matchMedia("(max-width: 600px)").matches

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

  // Desktop only: auto-focus would pop the keyboard over the starters on mobile.
  useEffect(() => {
    if (open && !isSheet()) inputRef.current?.focus()
  }, [open])

  // Mobile sheet: freeze the page behind so the sheet behaves like its own
  // screen. Hiding overflow is not enough on iOS: when the keyboard opens
  // Safari scrolls the page to reveal the focused input, dragging fixed
  // elements with it and exposing the page under the sheet. Pinning the body
  // leaves nothing to scroll, so the sheet stays put.
  useEffect(() => {
    if (!open || !isSheet()) return
    const body = document.body
    const scrollY = window.scrollY
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    }
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.left = "0"
    body.style.right = "0"
    body.style.width = "100%"
    body.style.overflow = "hidden"
    return () => {
      Object.assign(body.style, prev)
      window.scrollTo(0, scrollY)
    }
  }, [open])

  // Mobile sheet: the sheet always covers the whole layout viewport, because a
  // fixed element is positioned against that viewport, not the visual one that
  // the keyboard shrinks. Trying to resize it to the visual viewport leaves the
  // page showing through beneath. Instead pad the sheet's bottom by exactly the
  // height the keyboard covers, which lifts the input to sit on top of it.
  useEffect(() => {
    if (!open) return
    const vv = window.visualViewport
    if (!vv) return
    const update = () => {
      const el = panelRef.current
      if (!el) return
      if (!isSheet()) {
        el.style.paddingBottom = ""
        el.classList.remove("ask-panel--kb")
        return
      }
      const covered = Math.max(0, window.innerHeight - vv.height - vv.offsetTop)
      el.style.paddingBottom = covered > 0 ? `${covered}px` : ""
      // The keyboard covers the home indicator, so the safe-area padding under
      // the input is dead space while it is up.
      el.classList.toggle("ask-panel--kb", covered > 120)
    }
    update()
    vv.addEventListener("resize", update)
    vv.addEventListener("scroll", update)
    return () => {
      vv.removeEventListener("resize", update)
      vv.removeEventListener("scroll", update)
    }
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
        <div ref={panelRef} className={closing ? "ask-panel ask-panel--closing" : "ask-panel"} role="dialog" aria-label="JessieBot chat">
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
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "ask-msg ask-msg--user" : "ask-msg"}>
                {m.content || <span className="ask-typing" aria-label="Thinking"><i /><i /><i /></span>}
              </div>
            ))}
            {!busy && (() => {
              const asked = new Set(messages.filter(m => m.role === "user").map(m => m.content))
              const remaining = SUGGESTIONS.filter(s => !asked.has(s)).slice(0, 3)
              return remaining.length > 0 && (
                <div className="ask-starters">
                  {remaining.map(s => (
                    <button key={s} type="button" className="ask-starter" onClick={() => send(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              )
            })()}
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
