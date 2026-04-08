"use client"

import { useRef } from "react"
import TextCursorProximity from "@/components/ui/text-cursor-proximity"
import { GradientText } from "@/components/ui/gradient-text"

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
      <span style={{ display: "block", paddingBottom: "0.15em" }}>
        <TextCursorProximity
          label="jessie li"
          styles={sharedStyles}
          containerRef={containerRef}
          radius={120}
          falloff="gaussian"
          className="block"
        />
      </span>
      <GradientText as="div" className="hero-gradient-text block">
        <TextCursorProximity
          label="design engineer & product manager"
          styles={{
            transform: {
              from: "scale(1)" as string,
              to: "scale(1.3)" as string,
            },
          }}
          containerRef={containerRef}
          radius={140}
          falloff="gaussian"
          className="block"
        />
      </GradientText>
    </div>
  )
}
