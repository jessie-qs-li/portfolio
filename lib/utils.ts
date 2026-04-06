import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export class ImageTrailController {
  private elements: HTMLElement[]
  private threshold: number
  private currentIndex = 0
  private mouseX = 0
  private mouseY = 0
  private lastX = 0
  private lastY = 0
  private rafId: number | null = null
  private active = false

  constructor(elements: HTMLElement[], threshold: number) {
    this.elements = elements
    this.threshold = threshold
  }

  init() {
    this.elements.forEach((el) => {
      el.style.position = "fixed"
      el.style.pointerEvents = "none"
      el.style.opacity = "0"
      el.style.zIndex = "9998"
      el.style.transform = "translate(-50%, -50%) scale(0.6)"
      el.style.transition = "opacity 0.4s ease, transform 0.4s ease"
      el.style.width = "80px"
      el.style.height = "80px"
      el.style.objectFit = "contain"
    })
    this.tick()
  }

  setMousePos(x: number, y: number) {
    this.mouseX = x
    this.mouseY = y
  }

  setActive(active: boolean) {
    this.active = active
    if (!active) {
      this.elements.forEach((el) => {
        el.style.opacity = "0"
        el.style.transform = "translate(-50%, -50%) scale(0.4)"
      })
    }
  }

  private tick = () => {
    if (this.active) {
      const dx = this.mouseX - this.lastX
      const dy = this.mouseY - this.lastY
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist > this.threshold) {
        this.showNext()
        this.lastX = this.mouseX
        this.lastY = this.mouseY
      }
    }
    this.rafId = requestAnimationFrame(this.tick)
  }

  private showNext() {
    const el = this.elements[this.currentIndex % this.elements.length]
    this.currentIndex++
    const angle = Math.random() * 40 - 20
    el.style.left = `${this.mouseX}px`
    el.style.top = `${this.mouseY}px`
    el.style.opacity = "1"
    el.style.transform = `translate(-50%, -50%) scale(1) rotate(${angle}deg)`
    setTimeout(() => {
      el.style.opacity = "0"
      el.style.transform = `translate(-50%, -50%) scale(0.5) rotate(${angle + 10}deg)`
    }, 700)
  }

  destroy() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId)
  }
}
