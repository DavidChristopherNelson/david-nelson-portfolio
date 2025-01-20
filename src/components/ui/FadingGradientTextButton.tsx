// FadingGradientTextButton.tsx

import React, { useRef, useEffect, useImperativeHandle } from "react"
import { Button, type ButtonProps } from "./button" // Adjust import path if needed

export const FadingGradientTextButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>((props, forwardedRef) => {
  const fadeTime = 8000
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  // Let parent refs still access the underlying button if needed:
  useImperativeHandle(forwardedRef, () => buttonRef.current as HTMLButtonElement)

  const fadeGradient = () => {
    if (!buttonRef.current) return

    // Random pick from a small color palette:
    const colors = ["#008080", "#FFD700"] // teal, gold
    const color = colors[Math.floor(Math.random() * colors.length)]

    // Random position for the radial center:
    const randX = Math.floor(Math.random() * 100)
    const randY = Math.floor(Math.random() * 100)

    // Update the button’s background so the text clips to it:
    buttonRef.current.style.backgroundImage = `
      radial-gradient(ellipse at ${randX}% ${randY}%, 
        ${color},
        rgba(255, 255, 255, 0)
      )
    `

    // Animate the text from 0 -> 1 -> 0 opacity:
    buttonRef.current.animate(
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
  }

  useEffect(() => {
    fadeGradient()
    const intervalId = setInterval(fadeGradient, fadeTime)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Button
      ref={buttonRef}
      {...props}
      // We override default background & text color:
      style={{
        ...props.style,
        // Ensure no default background from Shadcn styles covers our gradient
        backgroundColor: "transparent",
        // The text color is forced transparent so the gradient "shows" inside the glyphs
        color: "transparent",
        // Actual clipping for the text fill
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    />
  )
})

FadingGradientTextButton.displayName = "FadingGradientTextButton"
