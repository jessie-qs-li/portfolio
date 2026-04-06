interface LetterboxdEntry {
  filmTitle: string
  rating: number | null
  watchedDate: string
}

function parseRSS(xml: string): LetterboxdEntry[] {
  const items = xml.split("<item>").slice(1)
  return items.slice(0, 3).map((item) => {
    const filmTitle =
      item.match(/<letterboxd:filmTitle><!\[CDATA\[(.+?)\]\]><\/letterboxd:filmTitle>/)?.[1] ||
      item.match(/<letterboxd:filmTitle>(.+?)<\/letterboxd:filmTitle>/)?.[1] ||
      ""

    const ratingStr = item.match(/<letterboxd:memberRating>(.+?)<\/letterboxd:memberRating>/)?.[1]
    const rating = ratingStr ? parseFloat(ratingStr) : null

    const watchedDate =
      item.match(/<letterboxd:watchedDate>(.+?)<\/letterboxd:watchedDate>/)?.[1] || ""

    return { filmTitle, rating, watchedDate }
  })
}

function toStars(rating: number): string {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return "★".repeat(full) + (half ? "½" : "")
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ""
  const d = new Date(dateStr + "T00:00:00")
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export default async function LetterboxdRecent() {
  let entries: LetterboxdEntry[] = []

  try {
    const res = await fetch("https://letterboxd.com/qishan_li/rss/", {
      next: { revalidate: 3600 },
      headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-site/1.0)" },
    })
    if (res.ok) {
      const xml = await res.text()
      entries = parseRSS(xml)
    }
  } catch {
    // silently fail — card still renders without the list
  }

  if (entries.length === 0) return null

  return (
    <ul className="letterboxd-recent">
      {entries.map((e, i) => (
        <li key={i} className="letterboxd-recent-item">
          <span className="letterboxd-recent-title">{e.filmTitle}</span>
          <span className="letterboxd-recent-meta">
            {e.rating !== null && (
              <span className="letterboxd-recent-stars">{toStars(e.rating)}</span>
            )}
            <span className="letterboxd-recent-date">{formatDate(e.watchedDate)}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
