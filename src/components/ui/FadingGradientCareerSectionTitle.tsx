import { useRef, useEffect } from "react";

export function FadingGradientCareerSectionTitle() {
  const fadeTime = 8000;
  const divRef = useRef<HTMLDivElement | null>(null);

  // The function that applies a new random radial gradient and animates opacity.
  const fadeGradient = () => {
    if (!divRef.current) return;

    const colors = ["#008080", "#FFD700"]; // teal, gold
    const color = colors[Math.floor(Math.random() * colors.length)];
    const randX = Math.floor(Math.random() * 100);
    const randY = Math.floor(Math.random() * 100);

    // Update the div’s background so the text is clipped to it.
    divRef.current.style.backgroundImage = `
      radial-gradient(ellipse at ${randX}% ${randY}%, 
        ${color},
        rgba(255, 255, 255, 0)
      )
    `;

    // Animate the div from 0 -> 1 -> 0 opacity:
    divRef.current.animate(
      [
        { opacity: "0" },
        { opacity: "1" },
        { opacity: "0" }
      ],
      {
        duration: fadeTime,
        fill: "forwards",
      }
    );
  };

  useEffect(() => {
    // Random offset between 0 and fadeTime (8s):
    const randomOffset = Math.floor(Math.random() * fadeTime);

    let intervalId: NodeJS.Timeout | undefined;

    // Start the first fade after the random offset.
    const startTimeout = setTimeout(() => {
      fadeGradient();
      // Then continue every fadeTime ms.
      intervalId = setInterval(fadeGradient, fadeTime);
    }, randomOffset);

    // Cleanup on unmount
    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        position: "absolute",
        left: "50%", // Move the left edge to the center of the parent
        transform: "translateX(-50%)", // Adjust the element's center to align with the parent's center
        fontSize: "5rem",
        fontFamily: 'Consolas, "Menlo", "Courier New", monospace',
        // Make sure the background is transparent initially
        backgroundColor: "transparent",
        // Force the text color to be transparent, so background clip shows through
        color: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        // Optional styling to ensure text fits or is visible
        overflow: "hidden",
      }}
    >
      Software Engineer
    </div>
  );
}

<h1
style={{ 
  fontSize: "12rem",
  fontFamily: 'Consolas, "Menlo", "Courier New", monospace',
  margin: 0,
  lineHeight: 0.9
}}
>
Nelson
</h1>