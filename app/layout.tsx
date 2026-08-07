import type { Metadata } from "next"
import localFont from "next/font/local"
import { JetBrains_Mono, VT323 } from "next/font/google"
import SmoothScroll from "@/components/SmoothScroll"
import "./globals.css"

// Each research project's own typeface, used only for its title in the
// Research section: The Turing Gallery ships JetBrains Mono, Imposter VT323.
const tgMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--tg-mono", display: "swap" })
const imPixel = VT323({ subsets: ["latin"], weight: ["400"], variable: "--im-pixel", display: "swap" })

const siteFont = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/GeneralSans-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/GeneralSans-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-site",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jessie Li",
  description: "Aspiring product manager, HCI nerd, 5x hackathon winner. CS & Film @ Columbia.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${siteFont.variable} ${tgMono.variable} ${imPixel.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');if(s==='dark'||((!s)&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}})()`,
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
