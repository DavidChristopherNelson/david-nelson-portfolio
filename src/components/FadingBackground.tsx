import { useRef, useEffect } from "react";

interface FadingBackgroundProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
}

const FadingBackground: React.FC<FadingBackgroundProps> = ({
  className = "top-0 left-0 w-full h-full",
  style,
  text = ""
}) => {
  const fadeTime = 8000;
  const divRef = useRef<HTMLDivElement | null>(null);

  const fadeGradient = () => {
    if (!divRef.current) return;

    // Random pick from a small color palette
    const colors = [
      "rgba(0, 128, 128, 0.25)",
      "rgba(255, 215, 0, 0.25)" 
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Random position for the radial center
    const randX = Math.floor(Math.random() * 100);
    const randY = Math.floor(Math.random() * 100);

    // Update the div’s background
    divRef.current.style.backgroundImage = `
      radial-gradient(ellipse at ${randX}% ${randY}%, 
        ${color}, 
        rgba(255, 255, 255, 0)
      )
    `;

    // Animate the box from opacity 0 -> 1 -> 0
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
    // Generate a random offset between 0 and fadeTime
    const randomOffset = Math.floor(Math.random() * fadeTime);

    let intervalId: NodeJS.Timeout | undefined;

    // Start the first fade after the random offset
    const startTimeout = setTimeout(() => {
      fadeGradient();
      // Then continue every fadeTime ms
      intervalId = setInterval(fadeGradient, fadeTime);
    }, randomOffset);

    // Cleanup on unmount
    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div
        ref={divRef}
        className={`
          absolute
          ${className}
          ${text !== "" ? "text-transparent bg-clip-text" : ""}
        `}
        style={style}
      >
        {text}
      </div>
    </>
  );
};

export default FadingBackground;
