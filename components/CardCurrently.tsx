// Static "what I'm doing right now" block for the profile card. No fetch —
// edit the lines here when things change.

const NOW = [
  { label: "Building", value: "product & growth at BoldVoice", href: "https://www.boldvoice.com/" },
  { label: "Leading", value: "the Spectator mobile app", href: "https://apps.apple.com/us/app/columbia-spectator/id6470171397" },
  { label: "Studying", value: "CS & Film at Columbia", href: "https://www.columbia.edu" },
]

export default function CardCurrently() {
  return (
    <ul className="mini-list">
      {NOW.map(n => (
        <li key={n.label}>
          <a href={n.href} target="_blank" rel="noopener">
            <span className="mini-label">{n.label}</span>
            <span className="mini-title mini-title--right">{n.value}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
