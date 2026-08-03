"use client"

import { useEffect } from "react"

export default function ClientScripts() {
  useEffect(() => {
    // Theme toggle
    const toggleBtn = document.getElementById("theme-toggle")
    const themeIcon = document.getElementById("theme-icon")

    const sunSVG = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    const moonSVG = `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`

    function applyThemeIcon() {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark"
      if (themeIcon) themeIcon.innerHTML = isDark ? sunSVG : moonSVG
    }

    applyThemeIcon()

    toggleBtn?.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark"
      document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark")
      localStorage.setItem("theme", isDark ? "light" : "dark")
      applyThemeIcon()
    })

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible") }),
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    )
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))

    // Demo videos: only play while on screen, so four autoplaying clips don't
    // burn cycles off-screen. Also re-triggers play if autoplay was blocked.
    const videos = document.querySelectorAll<HTMLVideoElement>(".demo-media video")
    const videoObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        const v = e.target as HTMLVideoElement
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      }),
      { threshold: 0.25 }
    )
    videos.forEach((v) => videoObserver.observe(v))

    return () => { observer.disconnect(); videoObserver.disconnect() }
  }, [])

  return null
}
