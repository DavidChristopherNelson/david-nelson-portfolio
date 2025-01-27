import FadingBackground from "./FadingBackground";

function Overview () {
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
          Hello
        </div>
      </div>
    </div>
  );
};

export default Overview;
