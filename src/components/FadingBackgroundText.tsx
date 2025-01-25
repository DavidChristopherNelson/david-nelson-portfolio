interface FadingBackgroundTextProps {
  text: string;
}

const FadingBackgroundText: React.FC<FadingBackgroundTextProps> = ({
  text,
}) => {
  return (
    <div>
      {text}
    </div>
  );
};

export default FadingBackgroundText;
