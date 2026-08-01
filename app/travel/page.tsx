import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Travel Gallery — Jessie Li",
}

const PHOTOS = [
  {
    src: "/travel/volcan-de-fuego-guatemala.png",
    alt: "Volcán de Fuego erupting at night with lava and an ash plume, Guatemala",
    caption: "Volcán de Fuego, Guatemala",
  },
  {
    src: "/travel/arctic-circle-alaska.png",
    alt: "Northern lights over a snowy forest, Arctic Circle, Alaska",
    caption: "Arctic Circle, Alaska",
  },
  {
    src: "/travel/dalton-highway-alaska.png",
    alt: "Portrait on the Dalton Highway with frosted trees and snow-covered mountains, Alaska",
    caption: "Dalton Highway, Alaska",
  },
  {
    src: "/travel/xian-china.png",
    alt: "Traditional Chinese tower lit at night with golden roofs and red lanterns, Xi'an, China",
    caption: "Xi'an, China",
  },
  {
    src: "/travel/macau-china.png",
    alt: "Stone steps above a busy plaza with colonial buildings and the Grand Lisboa tower, Macau, China",
    caption: "Macau, China",
  },
  {
    src: "/travel/yamanouchi-japan.png",
    alt: "Japanese macaques on a car roof with ski lift and snowy mountains, Yamanouchi, Japan",
    caption: "Yamanouchi, Japan",
  },
  {
    src: "/travel/montreal-canada.png",
    alt: "Interior of Notre-Dame Basilica with blue vaults, golden altar, and carved reredos, Montreal, Canada",
    caption: "Montreal, Canada",
  },
  {
    src: "/travel/rome-italy.png",
    alt: "Interior of the Colosseum with stone arches and tiers under a blue sky, Rome, Italy",
    caption: "Rome, Italy",
  },
  {
    src: "/travel/seoul-south-korea.png",
    alt: "Seoul skyline at night with lit towers, dark hills in the foreground and distant mountains, South Korea",
    caption: "Seoul, South Korea",
  },
  {
    src: "/travel/yaxha-guatemala.png",
    alt: "Mayan stepped pyramid at Yaxhá surrounded by jungle with visitors on the stairs, Guatemala",
    caption: "Yaxhá, Guatemala",
  },
  {
    src: "/travel/hagia-sophia-turkey.png",
    alt: "Interior of Hagia Sophia with golden mosaics, domes, and large Arabic calligraphic roundels, Istanbul, Turkey",
    caption: "Hagia Sophia, Turkey",
  },
  {
    src: "/travel/castner-glacier-alaska.png",
    alt: "View from inside an ice cave toward snowy peaks and blue sky, Castner Glacier, Alaska",
    caption: "Castner Glacier, Alaska",
  },
] as const

export default function TravelGallery() {
  return (
    <main className="gallery-shell">
      <Link href="/" className="back-link">← Back</Link>

      <div className="gallery-head">
        <span className="section-chip">Travel</span>
        <p className="gallery-sub">5 continents and counting.</p>
      </div>

      <div className="gallery-grid">
        {PHOTOS.map((photo, i) => (
          <figure className="gallery-card" key={photo.src}>
            <div className="gallery-frame">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </div>
            <figcaption className="gallery-caption">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </main>
  )
}
