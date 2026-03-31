"use client"

import { useEffect } from "react"

export default function ClientScripts() {
  useEffect(() => {
    // Theme toggle
    const toggleBtn = document.getElementById("theme-toggle")
    const themeIcon = document.getElementById("theme-icon")

    function applyThemeIcon() {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark"
      if (themeIcon) themeIcon.textContent = isDark ? "☀" : "☾"
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))

    // Smooth nav click
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const target = document.querySelector((link as HTMLAnchorElement).getAttribute("href")!)
        target?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    })

    // Mobile nav
    const hamburger = document.getElementById("hamburger")
    const mobileNav = document.getElementById("mobile-nav")

    function openNav() {
      mobileNav?.classList.add("open")
      hamburger?.classList.add("open")
      hamburger?.setAttribute("aria-expanded", "true")
      mobileNav?.setAttribute("aria-hidden", "false")
      document.body.style.overflow = "hidden"
    }
    function closeNav() {
      mobileNav?.classList.remove("open")
      hamburger?.classList.remove("open")
      hamburger?.setAttribute("aria-expanded", "false")
      mobileNav?.setAttribute("aria-hidden", "true")
      document.body.style.overflow = ""
    }

    hamburger?.addEventListener("click", () => {
      mobileNav?.classList.contains("open") ? closeNav() : openNav()
    })

    mobileNav?.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        closeNav()
        const target = document.querySelector((link as HTMLAnchorElement).getAttribute("href")!)
        if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 10)
      })
    })

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileNav?.classList.contains("open")) closeNav()
    })

    // Active nav on scroll
    const sectionIds = ["about", "work", "experience", "writing", "contact"]
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-links a")

    function updateActive() {
      let current = ""
      sections.forEach((s) => { if (s.getBoundingClientRect().top <= 100) current = s.id })
      navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current))
    }

    window.addEventListener("scroll", updateActive, { passive: true })
    updateActive()

    // Wonder slideshow
    const rootEl = document.querySelector<HTMLElement>("[data-wonder-slideshow]")
    if (rootEl) {
      const wonderRoot: HTMLElement = rootEl
      const total = 2
      const intervalMs = 5500
      let slide = 0
      let timer: ReturnType<typeof setInterval> | null = null
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

      const applySlide = () => wonderRoot.setAttribute("data-slide", String(slide))
      const setSlide = (n: number) => { slide = ((n % total) + total) % total; applySlide() }
      const armTimer = () => {
        if (reduced) return
        if (timer) clearInterval(timer)
        timer = setInterval(() => setSlide(slide + 1), intervalMs)
      }

      wonderRoot.querySelector(".wonder-arrow-prev")?.addEventListener("click", () => { setSlide(slide - 1); armTimer() })
      wonderRoot.querySelector(".wonder-arrow-next")?.addEventListener("click", () => { setSlide(slide + 1); armTimer() })

      applySlide()
      armTimer()
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", updateActive)
    }
  }, [])

  return null
}
