interface ImageInfo {
  src: string;
  alt: string;
}

interface ButtonInfo {
  href: string;
  text: string;
}

interface MobileProjectProps {
  heading: string;
  description: string;
  buttons: ButtonInfo[];
  imageInfo: ImageInfo;
  tags?: string[];
}

const MobileProject = ({heading, description, buttons, imageInfo, tags}: MobileProjectProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center my-10"
    >
      <div
        className="w-[75vw] relative"
      >
        <div
          className="w-full bg-[#008080] text-white rounded-tl-lg rounded-tr-lg p-4"
        >
          <h1 className="text-3xl font-bold text-center">{heading}</h1>
          <div
              className="flex flex-row flex-wrap justify-center w-full -mx-1"
            >
            {tags?.map((tag, i) => (
                <div 
                  key={i} 
                  className="flex rounded-md border-2 border-[#FFD700] p-1 mx-1 mt-2 text-sm font-medium"
                >
                  {tag}
              </div>
            ))}
          </div>
          <p className="mt-2 text-center">{description}</p>
          <div className="mt-8 flex justify-center gap-3">
            {buttons.map((buttonInfo, i) => (
              <a
                key={i}
                href={buttonInfo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD700] text-black px-4 py-2 rounded inline-block"
              >
                {buttonInfo.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className="w-[80vw] relative"
      >
        <img
            src={imageInfo.src}
            alt={imageInfo.alt}
            className="h-auto w-[80vw] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default MobileProject;
