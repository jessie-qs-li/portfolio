import type { CSSProperties } from "react"
import type { Project } from "@/lib/projects"

// One project tile: demo clip on top, name, award, and the description that
// unfolds on hover. Shared by the homepage grid and the /tiktok deck.
// `open` keeps the description unfolded instead of waiting for hover.
export default function DemoCard({ p, style, open }: { p: Project; style?: CSSProperties; open?: boolean }) {
  return (
    <a className={open ? "demo-card demo-card--open" : "demo-card"} href={p.url} target="_blank" rel="noopener" style={style}>
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
  )
}
