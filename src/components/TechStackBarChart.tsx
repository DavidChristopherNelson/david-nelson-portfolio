interface TechStackBarChartProps {
  techStackList: {
    name: string;
    frequency: number;
  }[];
}

const TechStackBarChart = ({ techStackList }: TechStackBarChartProps) => {
  const chartHeight = 200;
  const ticks = [1, 2, 3, 4];
  const maxValue = Math.max(...techStackList.map((tech) => tech.frequency));

  return (
    <>
      <div className="relative w-full pl-36 h-[300px] mt-10 mb-32">
        <div
          className="
            absolute 
            bottom-32
            flex 
            flex-col 
            justify-end 
            h-[300px] 
            text-xl 
            font-black 
            -rotate-90 
            origin-bottom 
            text-[#FFD700]
          "
        >
          Number of Projects
        </div>
        {ticks.map((tickValue) => {
          const tickYPosition = 20 + (tickValue / 4) * chartHeight;

          return (
            <div
              key={tickValue}
              className="absolute left-72 flex items-center"
              style={{ bottom: `${tickYPosition}px` }} // Inline style for dynamic positioning
            >
              <span className="mr-2 text-xs text-white">
                {tickValue !== 0 ? tickValue : ""}
              </span>
            <div className="border-t border-gray-300 w-screen" />
            </div>
          );
        })}
        <div
          className="
            absolute 
            bottom-0 
            left-0 
            w-[2500px] 
            flex 
            items-end 
            justify-between
            ml-72
          "
        >
          {techStackList.map((tech) => {
            const barHeight = (tech.frequency / maxValue) * chartHeight;

            return (
              <div
                key={tech.name}
                className="flex flex-col items-center"
                style={{ width: `${150 / techStackList.length}%` }}
              >
                <div>
                  <i className={`devicon-${tech.name.toLowerCase()}-plain`}></i>
                </div>
                <div
                  className="bg-[#008080] hover:opacity-80 transition-all w-6 mt-2"
                  style={{ height: barHeight }}
                  title={`${tech.name}: ${tech.frequency}`}
                />
                <span 
                  className="
                    text-base 
                    mt-1 
                    font-black 
                    text-[#FFD700]
                  "
                >
                  {tech.name}
                </span>
              </div>
            )
          })}
        </div>
        <div
          className="
            absolute
            w-screen 
            h-full 
            bg-gradient-to-r from-transparent from-50% to-black to-80%
          "
        />
      </div>
    </>
  );
};

export default TechStackBarChart;
