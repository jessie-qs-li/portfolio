"use client"

import { useEffect, useRef, useState } from "react"
import type { Project } from "@/lib/projects"

// Four cards fill two rows; the last row sits behind a toggle.
const VISIBLE_COUNT = 4

export default function ProjectGrid({ items }: { items: Project[] }) {
  const [expanded, setExpanded] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const shown = expanded ? items : items.slice(0, VISIBLE_COUNT)
  const hiddenCount = items.length - VISIBLE_COUNT

  // Demo clips only play while on screen. Re-runs when the last row is
  // revealed so newly mounted videos get picked up too.
  useEffect(() => {
    const videos = gridRef.current?.querySelectorAll<HTMLVideoElement>(".demo-media video")
    if (!videos?.length) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        const v = e.target as HTMLVideoElement
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      }),
      { threshold: 0.25 }
    )
    videos.forEach(v => io.observe(v))
    return () => io.disconnect()
  }, [expanded])

  return (
    <>
      <div className="demo-grid" ref={gridRef}>
        {[0, 1].map(col => (
          <div className="demo-col" key={col}>
            {shown.map((p, i) => ({ p, i })).filter(({ i }) => i % 2 === col).map(({ p, i }) => (
              <a className="demo-card" key={p.name} href={p.url} target="_blank" rel="noopener" style={{ order: i }}>
                {p.video ? (
                  <span className="demo-media">
                    <video src={p.video} poster={p.poster} autoPlay muted loop playsInline preload="metadata" aria-hidden />
                  </span>
                ) : (
                  <span className="demo-media demo-media--empty"><span>{p.name}</span></span>
                )}
                <span className="demo-body">
                  <span className="demo-name">
                    {p.name}
                    <svg className="demo-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </span>
                  {p.award && <span className="row-award">{p.award}</span>}
                  <span className="demo-reveal">
                    <span className="demo-desc">{p.desc}</span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>

      {hiddenCount > 0 && (
        <button
          type="button"
          className="see-more"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "See less" : `See more (${hiddenCount})`}
          <svg
            className={expanded ? "see-more-chevron open" : "see-more-chevron"}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden
          ><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      )}
    </>
  )
}
