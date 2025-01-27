interface ImageInfo {
  src: string;
  alt: string;
}

interface ButtonInfo {
  href: string;
  text: string;
}

interface ProjectLeftProps {
  heading: string;
  description: string;
  buttons: ButtonInfo[];
  imageInfo: ImageInfo;
}

const ProjectLeft = ({heading, description, buttons, imageInfo}: ProjectLeftProps) => {
  return (
    <div
      className="flex flex-row items-center justify-center my-10"
    >
      <div
        className="w-[25vw] relative"
      >
        <div
          className="w-full bg-[#008080] text-white rounded-tl-lg rounded-bl-lg p-4"
        >
          <h1 className="text-3xl font-bold">{heading}</h1>
          <p className="mt-2">{description}</p>
          <div className="mt-8 flex gap-3">
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
        className="w-[40vw] relative"
      >
        <img
            src={imageInfo.src}
            alt={imageInfo.alt}
            className="h-auto w-[40vw] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProjectLeft;
