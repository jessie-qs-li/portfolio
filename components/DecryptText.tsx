"use client"

import { useEffect, useRef, useState } from "react"

// Port of the SpecialText effect from the Turing Gallery repo, so the title
// here decrypts exactly the way it does on the real site. Same character set,
// same two phases, same 20ms tick. The original leans on motion/react's
// useInView; this uses an IntersectionObserver so we add no dependency.

const RANDOM_CHARS = "_!X$0-+*#"

function randomChar(prev?: string): string {
  let c: string
  do {
    c = RANDOM_CHARS[Math.floor(Math.random() * RANDOM_CHARS.length)]
  } while (c === prev)
  return c
}

export default function DecryptText({
  children,
  speed = 20,
  className = "",
}: {
  children: string
  speed?: number
  className?: string
}) {
  const text = children
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  // Defaults to the real text so the server renders a readable title. If JS
  // is off, or the observer never fires, the title is simply correct rather
  // than an invisible run of spaces.
  const [display, setDisplay] = useState(text)

  // start once the title scrolls into view
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { rootMargin: "-40px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text)
      return
    }

    let step = 0
    let phase: 1 | 2 = 1
    const id = setInterval(() => {
      if (phase === 1) {
        // scramble sweeps in from the left
        const len = Math.min(step + 1, text.length)
        const chars: string[] = []
        for (let i = 0; i < len; i++) chars.push(randomChar(chars[i - 1]))
        for (let i = len; i < text.length; i++) chars.push(" ")
        setDisplay(chars.join(""))
        if (step < text.length * 2 - 1) step++
        else {
          phase = 2
          step = 0
        }
      } else {
        // real characters resolve left to right behind a cursor
        const revealed = Math.floor(step / 2)
        const chars: string[] = []
        for (let i = 0; i < revealed && i < text.length; i++) chars.push(text[i])
        if (revealed < text.length) chars.push(step % 2 === 0 ? "_" : randomChar())
        for (let i = chars.length; i < text.length; i++) chars.push(randomChar())
        setDisplay(chars.join(""))
        if (step < text.length * 2 - 1) step++
        else {
          setDisplay(text)
          clearInterval(id)
        }
      }
    }, speed)

    return () => clearInterval(id)
  }, [started, text, speed])

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  )
}
