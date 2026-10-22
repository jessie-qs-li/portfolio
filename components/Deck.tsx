"use client"

import { Children, useCallback, useEffect, useRef, useState } from "react"

// Slides are laid out on a fixed 1280x720 stage and scaled to fit the window,
// so a slide looks the same on a laptop, an external monitor, or a screen
// share. Arrow keys and space step through; the
// current slide lives in the hash so a refresh keeps your place.
// The menu button by the top-left label lists every slide by its section chip
// so you can jump straight to one; the bar just shows the slide count.
const W = 1280
const H = 720

export default function Deck({ children, corner, topLeft }: { children: React.ReactNode; corner?: React.ReactNode; topLeft?: React.ReactNode }) {
  const slides = Children.toArray(children)
  const count = slides.length
  const [index, setIndex] = useState(0)
  const [scale, setScale] = useState(1)
  // Hidden until the hash slide and the scale are applied, so a deep link
  // doesn't flash the cover first.
  const [ready, setReady] = useState(false)
  const indexRef = useRef(0)
  const stageRef = useRef<HTMLDivElement>(null)
  // Slide menu: titles are read from each slide's section chip when it opens.
  const [menuTitles, setMenuTitles] = useState<string[] | null>(null)
  const menuOpenRef = useRef(false)

  const openMenu = () => {
    const slideEls = stageRef.current?.querySelectorAll(".deck-slide") ?? []
    // The menu prints its own numbers, so drop a chip's "02 · " prefix.
    setMenuTitles([...slideEls].map((el, i) => {
      const chip = el.querySelector(".section-chip")?.textContent?.trim()
      return chip ? chip.replace(/^\d+\s*·\s*/, "") : i === 0 ? "Intro" : `Slide ${i + 1}`
    }))
    menuOpenRef.current = true
  }
  const closeMenu = () => {
    setMenuTitles(null)
    menuOpenRef.current = false
  }

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
      // The slide menu takes Escape and keeps the arrows from moving under it.
      if (menuOpenRef.current) {
        if (e.key === "Escape") { setMenuTitles(null); menuOpenRef.current = false }
        return
      }
      // Space and Enter on a focused control belong to that control (e.g. Expand).
      if ((e.key === " " || e.key === "Enter") && (e.target as HTMLElement).closest?.("button, a, summary, input, textarea")) return
      // While a details sheet is open, the arrows shouldn't flip slides under it.
      if (document.querySelector(".more-overlay")) return
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
        <div className="deck-stage" ref={stageRef} style={{ width: W, height: H, transform: `scale(${scale})` }}>
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
          {topLeft && (
            <div className="deck-topleft">
              <button
                type="button"
                className="deck-menu-btn"
                aria-label="Slide menu"
                aria-expanded={!!menuTitles}
                onClick={() => (menuTitles ? closeMenu() : openMenu())}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
              </button>
              <span>{topLeft}</span>
            </div>
          )}
          {menuTitles && (
            <>
              <div className="deck-menu-backdrop" onClick={closeMenu} />
              <nav className="deck-menu panel" aria-label="Slides">
                {menuTitles.map((t, i) => (
                  <button
                    type="button"
                    key={i}
                    className={i === index ? "deck-menu-item deck-menu-item--on" : "deck-menu-item"}
                    aria-current={i === index ? "page" : undefined}
                    onClick={() => { go(i); closeMenu() }}
                  >
                    <span className="deck-menu-num">{i + 1}</span>
                    {t}
                  </button>
                ))}
              </nav>
            </>
          )}
          {corner && <div className="deck-corner">{corner}</div>}
        </div>
      </div>

      <nav className="deck-nav" aria-label="Slides">
        <span className="deck-count">{index + 1} / {count}</span>
      </nav>
    </div>
  )
}
