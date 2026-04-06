import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Travel Gallery — Jessie Li",
}

const PHOTOS = [
  {
    src: "/travel/volcan-de-fuego-guatemala.png",
    alt: "Volcán de Fuego erupting at night with lava and an ash plume, Guatemala",
    caption: "volcán de fuego, guatemala",
  },
  {
    src: "/travel/arctic-circle-alaska.png",
    alt: "Northern lights over a snowy forest, Arctic Circle, Alaska",
    caption: "arctic circle, alaska",
  },
  {
    src: "/travel/dalton-highway-alaska.png",
    alt: "Portrait on the Dalton Highway with frosted trees and snow-covered mountains, Alaska",
    caption: "dalton highway, alaska",
  },
  {
    src: "/travel/xian-china.png",
    alt: "Traditional Chinese tower lit at night with golden roofs and red lanterns, Xi'an, China",
    caption: "xi'an, china",
  },
  {
    src: "/travel/macau-china.png",
    alt: "Stone steps above a busy plaza with colonial buildings and the Grand Lisboa tower, Macau, China",
    caption: "macau, china",
  },
  {
    src: "/travel/yamanouchi-japan.png",
    alt: "Japanese macaques on a car roof with ski lift and snowy mountains, Yamanouchi, Japan",
    caption: "yamanouchi, japan",
  },
  {
    src: "/travel/montreal-canada.png",
    alt: "Interior of Notre-Dame Basilica with blue vaults, golden altar, and carved reredos, Montreal, Canada",
    caption: "montreal, canada",
  },
  {
    src: "/travel/rome-italy.png",
    alt: "Interior of the Colosseum with stone arches and tiers under a blue sky, Rome, Italy",
    caption: "rome, italy",
  },
  {
    src: "/travel/seoul-south-korea.png",
    alt: "Seoul skyline at night with lit towers, dark hills in the foreground and distant mountains, South Korea",
    caption: "seoul, south korea",
  },
  {
    src: "/travel/yaxha-guatemala.png",
    alt: "Mayan stepped pyramid at Yaxhá surrounded by jungle with visitors on the stairs, Guatemala",
    caption: "yaxha, guatemala",
  },
  {
    src: "/travel/hagia-sophia-turkey.png",
    alt: "Interior of Hagia Sophia with golden mosaics, domes, and large Arabic calligraphic roundels, Istanbul, Turkey",
    caption: "hagia sophia, turkey",
  },
  {
    src: "/travel/castner-glacier-alaska.png",
    alt: "View from inside an ice cave toward snowy peaks and blue sky, Castner Glacier, Alaska",
    caption: "castner glacier, alaska",
  },
] as const

export default function TravelGallery() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", fontFamily: "var(--font-body)" }}>
      <div className="container" style={{ paddingTop: 80, paddingBottom: 120 }}>

        <Link
          href="/"
          style={{ fontFamily: "var(--font-display)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 600, color: "var(--text3)", textDecoration: "none", transition: "color 0.3s" }}
        >
          ← back
        </Link>

        <div style={{ marginTop: 48, marginBottom: 48 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(36px, 6vw, 64px)", letterSpacing: "-0.04em", lineHeight: 1.0, marginBottom: 12 }}>
            travel gallery
          </h1>
        </div>

        <div className="divider" style={{ marginBottom: 48 }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {PHOTOS.map((photo, i) => (
            <figure key={photo.src} style={{ margin: 0 }}>
              <div style={{ position: "relative", aspectRatio: "3/4", width: "100%", overflow: "hidden", borderRadius: 10, border: "1px solid var(--border)", background: "var(--card-bg)" }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                />
              </div>
              <figcaption style={{ marginTop: 10, textAlign: "center", fontSize: 12, fontWeight: 300, color: "var(--text3)", letterSpacing: "0.04em", textTransform: "lowercase" }}>
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </main>
  )
}
