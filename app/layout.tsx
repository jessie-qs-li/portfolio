import type { Metadata } from "next"
import localFont from "next/font/local"
import SmoothScroll from "@/components/SmoothScroll"
import "./globals.css"

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
    <html lang="en" suppressHydrationWarning className={siteFont.variable}>
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
