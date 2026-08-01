import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const creato = localFont({
  src: [
    { path: "./fonts/CreatoDisplay-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/CreatoDisplay-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/CreatoDisplay-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/CreatoDisplay-ExtraBold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-creato",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jessie Li — Design Engineer",
  description: "Design engineer building at the intersection of AI and storytelling. CS & Film @ Columbia.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={creato.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');if(s==='dark'||((!s)&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
