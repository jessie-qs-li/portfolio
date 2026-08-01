"use client"

import Image from "next/image"
import { useState } from "react"

type Item = { role: string; org: string; url: string; logo: string; date: string }

const VISIBLE_COUNT = 4

export default function ExperienceList({ items }: { items: Item[] }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? items : items.slice(0, VISIBLE_COUNT)

  return (
    <>
      <div className="row-list">
        {shown.map(e => (
          <div className="cv-row" key={e.role + e.org}>
            <Image className="row-logo" src={e.logo} alt="" width={34} height={34} unoptimized loading="eager" aria-hidden />
            <div className="row-body">
              <div className="row-title"><a href={e.url} target="_blank" rel="noopener">{e.org}</a></div>
              <div className="row-sub">{e.role}</div>
            </div>
            <div className="row-right">{e.date}</div>
          </div>
        ))}
      </div>
      {items.length > VISIBLE_COUNT && (
        <button
          type="button"
          className="see-more"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "See less" : `See more (${items.length - VISIBLE_COUNT})`}
          <svg
            className={expanded ? "see-more-chevron open" : "see-more-chevron"}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden
          ><polyline points="6 9 12 15 18 9"/></svg>
        </button>
      )}
    </>
  )
}
