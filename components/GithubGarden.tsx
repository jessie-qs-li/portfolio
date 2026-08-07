// Contribution calendar for a GitHub user, rendered from GitHub's own public
// fragment endpoint. No API token: /users/<name>/contributions is the same
// partial the profile page loads, and it needs no auth.

const USER = "jessie-qs-li"

type Day = { date: string; level: number; count: number }

export type GardenProps = {
  /** trailing weeks to show; 53 is the full year GitHub returns */
  weeks?: number
  /** "green" is GitHub's palette, "accent" borrows the site's purple */
  tone?: "green" | "accent"
  /** gap between cells, in px */
  gap?: number
  label?: boolean
}

async function fetchDays(): Promise<Day[] | null> {
  try {
    const res = await fetch(`https://github.com/users/${USER}/contributions`, {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-site/1.0)" },
    })
    if (!res.ok) return null
    const html = await res.text()

    // Counts are not on the cells: they live in the sr-only tooltips, joined
    // back to their cell by id. Without that join a partial-year view would
    // report the whole year's total.
    const counts = new Map<string, number>()
    const tip = /for="(contribution-day-component-[\d-]+)"[^>]*?>(?:([\d,]+) contributions?|No contributions)/g
    let m: RegExpExecArray | null
    while ((m = tip.exec(html)) !== null) {
      counts.set(m[1], m[2] ? Number(m[2].replace(/,/g, "")) : 0)
    }

    const days: Day[] = []
    const cell = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*?id="(contribution-day-component-[\d-]+)"[^>]*?data-level="(\d)"/g
    while ((m = cell.exec(html)) !== null) {
      days.push({ date: m[1], level: Number(m[3]), count: counts.get(m[2]) ?? 0 })
    }
    if (days.length === 0) return null

    days.sort((a, b) => a.date.localeCompare(b.date))
    return days
  } catch {
    return null
  }
}

export default async function GithubGarden({
  weeks = 53,
  tone = "green",
  gap = 2,
  label = true,
}: GardenProps) {
  const all = await fetchDays()
  if (!all) return null // card still renders without it

  const days = all.slice(-weeks * 7)
  const total = days.reduce((sum, d) => sum + d.count, 0)
  // GitHub's calendar starts on a Sunday; pad if a slice lands mid-week so the
  // weekday rows stay aligned.
  const lead = new Date(days[0].date + "T00:00:00").getDay()
  // The padding cells can push the slice into an extra column, so derive the
  // count rather than assuming it equals `weeks`. The grid divides the card's
  // width by this, so getting it wrong would misalign every row.
  const cols = Math.ceil((lead + days.length) / 7)

  return (
    <div className={`garden garden--${tone}`}>
      {label && (
        <div className="garden-head">
          <span>{total.toLocaleString()} contributions</span>
          <span className="garden-range">last {weeks >= 52 ? "year" : `${weeks} weeks`}</span>
        </div>
      )}
      <div className="garden-grid" style={{ "--cols": cols, "--gap": `${gap}px` } as React.CSSProperties}>
        {Array.from({ length: lead }).map((_, i) => (
          <i key={`pad-${i}`} className="garden-pad" aria-hidden />
        ))}
        {days.map(d => (
          <i key={d.date} data-l={d.level} title={d.date} />
        ))}
      </div>
    </div>
  )
}
