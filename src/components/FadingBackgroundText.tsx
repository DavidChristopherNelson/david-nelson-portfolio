import FadingBackground from "./FadingBackground";

interface FadingBackgroundTextProps {
  text: string;
}

const FadingBackgroundText: React.FC<FadingBackgroundTextProps> = ({
  text,
}) => {
  return (
    <div
      className="
        relative
        w-full
        text-9xl
        font-mono
        font-black
        h-96
        text-transparent 
        bg-clip-text 
      "
    >
      {text}
      <FadingBackground />
    </div>
  );
};

export default FadingBackgroundText;
