"use client"

import { useEffect, useRef, useState } from "react"
import type { Project } from "@/lib/projects"
import DemoCard from "@/components/DemoCard"

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
              <DemoCard key={p.name} p={p} style={{ order: i }} />
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
