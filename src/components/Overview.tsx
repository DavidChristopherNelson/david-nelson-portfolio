import FadingBackground from "./FadingBackground";

export enum TypographyType {
  Big = "big",
  Small = "small",
  Double = "double",
}

interface Typography {
  type: TypographyType,
  text: string,
}

interface TextInfo {
  textInfo: Typography[],
}

const Overview = ({ textInfo }: TextInfo) => {
  return (
    <div
      className="
        relative
        w-full
        h-[50vh]
      "
    >
      {Array(10).fill(0).map((_, i) => (
        <FadingBackground
          key={i}
          text="SOFTWAREDEVELOPER"
          className="top-1/2 left-1/2"
        />
      ))}
      <div className="flex justify-center items-center w-full h-full">
        <div className="
          bg-gray-800/70 
          backdrop-blur-md 
          text-white 
          flex 
          justify-center 
          items-center 
          px-24 
          py-8 
          text-center 
          w-min 
          rounded-md
        ">
          {textInfo.map((textSegment, i) => {
            const renderTextSegment = () => {
              switch (textSegment.type) {
                case TypographyType.Big:
                  return (
                    <span
                      key={i}
                      className="text-6xl font-bold"
                    >
                      {textSegment.text}
                    </span>
                  );
                case TypographyType.Small:
                  return (
                    <p
                      key={i}
                      className="px-10"
                    >
                      {textSegment.text}
                    </p>
                  );
                case TypographyType.Double:
                  return (
                    <div
                      key={i}
                      className="text-base tracking-wide uppercase leading-tight text-left"
                    >
                      {textSegment.text}
                    </div>
                  );
                default:
                  return null; // Handle unexpected types explicitly
              }
            };

            // Call renderTextSegment and return its result directly
            return renderTextSegment();
          })}
        </div>
      </div>
    </div>
  );
};

export default Overview;
