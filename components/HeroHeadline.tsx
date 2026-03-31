"use client"

import { useRef } from "react"
import TextCursorProximity from "@/components/ui/text-cursor-proximity"

export default function HeroHeadline() {
  const containerRef = useRef<HTMLDivElement>(null)

  const sharedStyles = {
    transform: {
      from: "scale(1)" as string,
      to: "scale(1.22)" as string,
    },
  }

  return (
    <div ref={containerRef} className="hero-headline cursor-default select-none">
      <TextCursorProximity
        label="design engineer building"
        styles={sharedStyles}
        containerRef={containerRef}
        radius={120}
        falloff="gaussian"
        className="block"
      />
      <TextCursorProximity
        label="at the intersection of"
        styles={sharedStyles}
        containerRef={containerRef}
        radius={120}
        falloff="gaussian"
        className="block"
      />
      {/* "AI and storytelling." stays gradient like before */}
      <TextCursorProximity
        label="AI and storytelling."
        styles={{
          transform: {
            from: "scale(1)" as string,
            to: "scale(1.3)" as string,
          },
          color: {
            from: "#dc143c",
            to: "#a855f7",
          },
        }}
        containerRef={containerRef}
        radius={140}
        falloff="gaussian"
        className="block"
      />
    </div>
  )
}
