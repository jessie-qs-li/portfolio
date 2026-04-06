"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface LabelMarker {
  id: string
  location: [number, number]
  text: string
  color: string
  rotate: number
}

interface GlobeLabelsProps {
  markers?: LabelMarker[]
  className?: string
  speed?: number
  dark?: number
}

const defaultMarkers: LabelMarker[] = [
  { id: "label-1", location: [48.86, 2.35], text: "Paris", color: "#e84855", rotate: -8 },
  { id: "label-2", location: [35.68, 139.65], text: "Tokyo", color: "#2a9d8f", rotate: 5 },
  { id: "label-3", location: [31.23, 121.47], text: "Shanghai", color: "#e76f51", rotate: -3 },
  { id: "label-4", location: [1.35, 103.82], text: "Singapore", color: "#e63946", rotate: -4 },
  { id: "label-5", location: [51.51, -0.13], text: "London", color: "#7b2cbf", rotate: -5 },
]

export function GlobeLabels({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
  dark = 1,
}: GlobeLabelsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width, height: width,
        phi: 0, theta: 0.2, dark,
        diffuse: 1.5,
        mapSamples: 16000, mapBrightness: dark ? 4 : 9,
        baseColor: [1, 1, 1],
        markerColor: [0.7, 0.5, 1.0],
        glowColor: dark ? [0.3, 0.2, 0.45] : [0.94, 0.93, 0.91],
        markerElevation: 0,
        markers: markers.map((m) => ({ location: m.location, size: 0.025, id: m.id })),
        arcs: [], arcColor: [0.6, 0.4, 0.8],
        arcWidth: 0.5, arcHeight: 0.25, opacity: 0.7,
      })

      function animate() {
        if (!isPausedRef.current) phi += speed
        globe!.update({
          phi: phi + phiOffsetRef.current + dragOffset.current.phi,
          theta: 0.2 + thetaOffsetRef.current + dragOffset.current.theta,
        })
        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, speed, dark])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%", height: "100%", cursor: "grab", opacity: 0,
          transition: "opacity 1.2s ease", borderRadius: "50%", touchAction: "none",
        }}
      />
    </div>
  )
}
