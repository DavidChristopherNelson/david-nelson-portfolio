// FadingGradientBackgroundButton.tsx

import React, { useRef, useEffect } from "react"
import { Button, type ButtonProps } from "./button" // <-- Adjust path if needed

export const FadingGradientBackgroundButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, ref) => {
  const numOfElements = 6  // number of background fade layers
  const fadeTime = 8000    // duration of each fade cycle in ms
  const backgroundContainerRef = useRef<HTMLDivElement>(null)

  // We store references to each background <div>
  const backgroundRefs = useRef<(HTMLDivElement | null)[]>(
    Array(numOfElements).fill(null)
  )

  // Function that triggers the fade animations for each layer
  const fadeGradients = () => {
    backgroundRefs.current.forEach((bg, i) => {
      if (!bg) return

      // Random color from a small palette
      const colors = ["#800080", "#ff0000"] // purple, red
      const color = colors[Math.floor(Math.random() * colors.length)]

      // Random ellipse center
      const randX = Math.floor(Math.random() * 100)
      const randY = Math.floor(Math.random() * 100)

      // Stagger the start time for each layer
      setTimeout(() => {
        bg.style.backgroundImage = `
          radial-gradient(ellipse 100% 100% at ${randX}% ${randY}%, 
            ${color}, 
            rgba(0,0,0,0)
          )
        `

        bg.animate(
          [
            { opacity: "0" },
            { opacity: "1" },
            { opacity: "0" }
          ],
          {
            duration: fadeTime,
            fill: "forwards",
          }
        )
      }, (i * fadeTime) / numOfElements)
    })
  }

  // Set up the initial fade + repeating interval
  useEffect(() => {
    fadeGradients()
    const intervalId = setInterval(fadeGradients, fadeTime)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      ref={backgroundContainerRef}
      style={{
        position: "relative",
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      {/* The standard Shadcn button inside */}
      <Button ref={ref} {...props} />

      {/* Background fade layers */}
      {Array.from({ length: numOfElements }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (backgroundRefs.current[i] = el)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      ))}
    </div>
  )
})

FadingGradientBackgroundButton.displayName = "FadingGradientBackgroundButton"
