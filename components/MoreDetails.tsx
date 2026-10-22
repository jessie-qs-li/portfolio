"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

// "Expand" toggle for a deck card. The details open in a sheet over the whole
// slide instead of growing the card, so long lists never push past the slide's
// bottom edge. The sheet is portalled into the deck stage so it scales with the
// slides and isn't trapped inside a card's hover transform. Close with the
// button, a click outside the sheet, or Escape.
export default function MoreDetails({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [stage, setStage] = useState<Element | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    // Leaving the slide closes the sheet so it isn't still up on return.
    const onHash = () => setOpen(false)
    window.addEventListener("keydown", onKey)
    window.addEventListener("hashchange", onHash)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("hashchange", onHash)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className="more-toggle"
        aria-expanded={open}
        onClick={e => { setStage(e.currentTarget.closest(".deck-stage")); setOpen(true) }}
      >
        Expand
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && stage && createPortal(
        <div className="more-overlay" onClick={() => setOpen(false)}>
          <div className="more-sheet panel" role="dialog" aria-modal="true" aria-label={title} onClick={e => e.stopPropagation()}>
            <div className="more-head">
              <div className="row-title">{title}</div>
              <button type="button" className="more-close" onClick={() => setOpen(false)} autoFocus>
                Close
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
            {children}
          </div>
        </div>,
        stage
      )}
    </>
  )
}
