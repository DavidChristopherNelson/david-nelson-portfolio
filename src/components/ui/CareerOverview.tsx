
function CareerOverview () {
  return (
    <div className="flex items-center justify-center -translate-y-32">
      <div className="bg-gray-800/70 backdrop-blur-md text-white flex items-center justify-center px-24 py-8 text-center w-min rounded-md">
        <div className="flex items-center gap-2">
          <span className="text-6xl font-bold">7</span>
          <div className="text-base tracking-wide uppercase leading-tight text-left">
            Software <br /> Projects
          </div>
        </div>
        <p className="px-10">over</p>
        <div className="flex items-center gap-2">
          <span className="text-6xl font-bold">2</span>
          <div className="text-base tracking-wide uppercase leading-tight text-left">
            years <br /> experience
          </div>
        </div>
        <p className="px-10">at</p>
        <div className="flex items-center gap-2">
          <span className="text-6xl font-bold">3</span>
          <div className="text-base tracking-wide uppercase leading-tight text-left">
            international <br /> organizations
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOverview;
