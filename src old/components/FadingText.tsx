interface FadingTextProps {
  text: string;
}

interface CalculateTextWidthProps {
  text: string;
  font: string;
}

function calculateTextWidth: (text, font) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font; // Specify the font style (e.g., "16px Arial")
  return context.measureText(text).width; // Measure the text's width in pixels
}

const FadingText: React.FC<FadingTextProps> = ({
  text
}) => {
  const fadeTime = 8000;
  const divRef = useRef<HTMLDivElement | null>(null);

  const fadeGradient = () => {
    if (!divRef.current) return;

    const colors = [
      "rgba(0, 128, 128, 0.25)",
      "rgba(255, 215, 0, 0.25)"
    ]
    const color = colors[Math.floor(Math.random() * colors.length)];

    const randX = Math.floor(Math.random() * 100);
    const randY = Math.floor(Math.random() * 100);

    divRef.current.style.backgroundImage = `
      radial-gradient(ellipse at ${randX}% ${randY}%,
        ${color},
        rgba(255, 255, 255, 0)
      )
    `

    divRef.current.animate(
      [
        { opacity: "0" },
        { opacity: "1" },
        { opacity: "0" },
      ],
      {
        duration: fadeTime,
        fill: "forwards",
      }
    );
  };

  useEffect(() => {
    const randomOffset = Math.floor(Math.random() * fadeTime);

    let intervalId: NodeJS.Timeout | undefined;

    const startTimeout = setTimeout(() => {
      fadeGradient();

      intervalId = setInterval(fadeGradient, fadeTime);
    }, randomOffset);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return(
    <div
      ref = {divRef}
      className="
        flex
        justify-center
        text-center

      "
      
    >

    </div>
  )
}

export default FadingText;