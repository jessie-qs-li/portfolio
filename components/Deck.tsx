"use client"

import { Children, useCallback, useEffect, useRef, useState } from "react"

// Slides are laid out on a fixed 1280x720 stage and scaled to fit the window,
// so a slide looks the same on a laptop, an external monitor, or a screen
// share. Arrow keys, space, and the on-screen buttons step through; the
// current slide lives in the hash so a refresh keeps your place.
const W = 1280
const H = 720

export default function Deck({ children, corner }: { children: React.ReactNode; corner?: React.ReactNode }) {
  const slides = Children.toArray(children)
  const count = slides.length
  const [index, setIndex] = useState(0)
  const [scale, setScale] = useState(1)
  // Hidden until the hash slide and the scale are applied, so a deep link
  // doesn't flash the cover first.
  const [ready, setReady] = useState(false)
  const indexRef = useRef(0)

  const go = useCallback((n: number) => {
    const next = Math.max(0, Math.min(count - 1, n))
    indexRef.current = next
    setIndex(next)
    history.replaceState(null, "", `#${next + 1}`)
  }, [count])

  useEffect(() => {
    const fromHash = () => {
      const n = parseInt(location.hash.slice(1), 10)
      if (n >= 1 && n <= count) go(n - 1)
    }
    fromHash()
    window.addEventListener("hashchange", fromHash)

    const fit = () => setScale(Math.min(window.innerWidth / W, (window.innerHeight - 64) / H))
    fit()
    window.addEventListener("resize", fit)

    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) { e.preventDefault(); go(indexRef.current + 1) }
      else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) { e.preventDefault(); go(indexRef.current - 1) }
      else if (e.key === "Home") go(0)
      else if (e.key === "End") go(count - 1)
    }
    window.addEventListener("keydown", onKey)

    document.documentElement.classList.add("deck-mode")
    const raf = requestAnimationFrame(() => setReady(true))
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("hashchange", fromHash)
      window.removeEventListener("resize", fit)
      window.removeEventListener("keydown", onKey)
      document.documentElement.classList.remove("deck-mode")
    }
  }, [count, go])

  return (
    <div className={ready ? "deck deck--ready" : "deck"}>
      <div className="deck-viewport">
        <div className="deck-stage" style={{ width: W, height: H, transform: `scale(${scale})` }}>
          {slides.map((s, i) => (
            <div
              key={i}
              className={i === index ? "deck-slide deck-slide--on" : "deck-slide"}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              {s}
            </div>
          ))}
          {corner && <div className="deck-corner">{corner}</div>}
        </div>
      </div>

      <nav className="deck-nav" aria-label="Slides">
        <button type="button" className="social-link" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <span className="deck-count">{index + 1} / {count}</span>
        <button type="button" className="social-link" onClick={() => go(index + 1)} disabled={index === count - 1} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </nav>
    </div>
  )
}
