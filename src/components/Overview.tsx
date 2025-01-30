import FadingBackground from "./FadingBackground";
import { useIsMobileScreenStore } from '../store/is_mobile_screen_store';

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
  backgroundText: string,
}

const Overview = ({ textInfo, backgroundText }: TextInfo) => {
  const { isMobileScreen } = useIsMobileScreenStore();

  return (
    <div
      className="
        relative
        w-full
        h-[50vh]
        my-32
      "
    >
      {isMobileScreen ? (
        <>
          {Array(10).fill(0).map((_, i) => (
            <FadingBackground
              key={i}
              text={backgroundText}
              className="top left-1/4"
            />
          ))}
          
          {Array(10).fill(0).map((_, i) => (
            <FadingBackground
              key={i}
              text={backgroundText}
              className="top-1/4 left-1/4"
            />
          ))}

          {Array(10).fill(0).map((_, i) => (
            <FadingBackground
              key={i}
              text={backgroundText}
              className="top-1/2 left-1/4"
            />
          ))}

          {Array(10).fill(0).map((_, i) => (
            <FadingBackground
              key={i}
              text={backgroundText}
              className="top-3/4 left-1/4"
            />
          ))}

          {Array(10).fill(0).map((_, i) => (
            <FadingBackground
              key={i}
              text={backgroundText}
              className="top-full left-1/4"
            />
          ))}
        </>
      ) : (
        <>
          {Array(10).fill(0).map((_, i) => (
            <FadingBackground
              key={i}
              text={backgroundText}
              className="top-1/2 left-1/2"
            />
          ))}
        </>
      )}

      <div className="flex justify-center items-center w-full h-full">
        <div className="
          bg-gray-800/70 
          backdrop-blur-md 
          text-white 
          flex
          flex-col
          sm:flex-row
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
                      className="text-5xl font-bold"
                    >
                      {textSegment.text}
                    </span>
                  );
                case TypographyType.Small:
                  return (
                    <p
                      key={i}
                      className="px-10 py-5 sm:py-0"
                    >
                      {textSegment.text}
                    </p>
                  );
                case TypographyType.Double:
                  return (
                    <div
                      key={i}
                      className="text-base tracking-wide uppercase leading-tight sm:text-left"
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
