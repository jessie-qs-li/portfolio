"use client"

import { useEffect } from "react"

export default function ClientScripts() {
  useEffect(() => {
    // Theme toggle
    const toggleBtn = document.getElementById("theme-toggle")
    const themeIcon = document.getElementById("theme-icon")

    const sunSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
    const moonSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`

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

    // Mock trial carousel
    const window_ = document.getElementById("mockTrialWindow")
    const prevBtn = document.getElementById("mockTrialPrev")
    const nextBtn = document.getElementById("mockTrialNext")
    if (window_) {
      const slides = Array.from(window_.querySelectorAll<HTMLElement>(".mock-trial-img"))
      const total = slides.length
      let current = 0
      let animating = false
      const go = (dir: "next" | "prev") => {
        if (animating) return
        animating = true
        const next = dir === "next" ? (current + 1) % total : (current - 1 + total) % total
        const incoming = dir === "next" ? "slide-in-right" : "slide-in-left"
        const outgoing = dir === "next" ? "slide-out-left" : "slide-out-right"
        slides[next].classList.remove("active")
        slides[next].classList.add(incoming)
        slides[current].classList.add(outgoing)
        slides[current].classList.remove("active")
        const cleanup = () => {
          slides[current].classList.remove(outgoing)
          slides[next].classList.remove(incoming)
          slides[next].classList.add("active")
          current = next
          animating = false
        }
        slides[next].addEventListener("animationend", cleanup, { once: true })
      }
      prevBtn?.addEventListener("click", () => go("prev"))
      nextBtn?.addEventListener("click", () => go("next"))
    }

    // Custom emoji cursors
    const cursor = document.createElement("div")
    cursor.id = "custom-emoji-cursor"
    document.body.appendChild(cursor)

    const emojiSections: { id: string; emoji: string; small?: boolean }[] = [
      { id: "thinking-section", emoji: "💭" },
      { id: "currently-section", emoji: "📌" },
      { id: "other-letterboxd", emoji: "🎬", small: true },
      { id: "other-writing", emoji: "✍️", small: true },
      { id: "other-videography", emoji: "🎥", small: true },
      { id: "other-mocktrial", emoji: "⚖️", small: true },
      { id: "other-travel", emoji: "✈️", small: true },
    ]

    let activeSection: HTMLElement | null = null

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }

    emojiSections.forEach(({ id, emoji, small }) => {
      const el = document.getElementById(id)
      el?.addEventListener("mouseenter", (e) => {
        activeSection = el
        cursor.textContent = emoji
        cursor.style.left = (e as MouseEvent).clientX + "px"
        cursor.style.top = (e as MouseEvent).clientY + "px"
        el.style.cursor = "none"
        cursor.classList.toggle("small", !!small)
        cursor.classList.remove("pop-out")
        void cursor.offsetWidth
        cursor.classList.add("pop-in")
      })
      el?.addEventListener("mouseleave", () => {
        activeSection = null
        el.style.cursor = ""
        cursor.classList.remove("pop-in")
        void cursor.offsetWidth
        cursor.classList.add("pop-out")
      })
    })

    window.addEventListener("mousemove", moveCursor)

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", updateActive)
      window.removeEventListener("mousemove", moveCursor)
      cursor.remove()
      emojiSections.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el) el.style.cursor = ""
      })
    }
  }, [])

  return null
}
