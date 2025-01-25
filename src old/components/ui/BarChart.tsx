type BarChartProps = {
  data: {
    label: string;
    value: number;
  }[];
};

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // Find the max value in the dataset.
  const maxValue = Math.max(...data.map((item) => item.value));

  // Decide how many tick marks you want on the y-axis. 
  // For example, 5 + 0 => 6 ticks total.
  const ticks = [1, 2, 3, 4];


  // We'll define a fixed height (in px) for the charting area
  // so we can position bars and tick lines easily.
  const chartHeight = 200;

  return (
    <div className="p-4">
      <div className="flex items-center pl-36">
        {/* Chart Container (relative for absolute-positioned elements) */}
        <div className="relative w-full" style={{ height: chartHeight }}>

          {/* Y-Axis Label (rotated) */}
          <div className="mr-3 flex flex-col justify-end" style={{ height: chartHeight }}>
            <span className="text-base font-black absolute -left-24 top-10 -rotate-90 origin-bottom text-[#FFD700]">
              Number of Projects
            </span>
          </div>
          {/* Left axis line */}
          <div className="absolute left-0 top-0 bottom-0 border-gray-300" />

          {/* Bottom axis line */}
          <div className="absolute left-0 bottom-0 right-0 border-gray-300" />

          {/* Y-Axis tick marks + numeric labels */}
          {ticks.map((tickValue) => {
            // Map tick value to a bottom offset in pixels
            const yPx = 20 + (tickValue / 4) * (chartHeight );

            return (
              <div
                key={tickValue}
                className="absolute left-0 right-0 flex items-center"
                style={{ bottom: yPx }}
              >
                {/* Tick mark label */}
                <span className="mr-2 text-xs text-white">{tickValue}</span>
                {/* A short horizontal tick line extending from the y-axis */}
                <div className="border-t border-gray-300 w-screen" />
              </div>
            );
          })}

          {/* Bars (stacked along the bottom) */}
          <div className="absolute bottom-0 left-0 w-full flex items-end justify-between">
            {data.map((item) => {
              const barHeight = (item.value / maxValue) * chartHeight;

              return (
                <div
                  key={item.label}
                  // Distribute columns evenly
                  className="flex flex-col items-center"
                  style={{ width: `${100 / data.length}%` }}
                >
                  {/* Bar */}
                  <div
                    className="bg-[#008080] hover:opacity-80 transition-all w-6"
                    style={{ height: barHeight }}
                    title={`${item.label}: ${item.value}`}
                  />
                  {/* Category label */}
                  <span className="text-base mt-1 font-black text-[#FFD700]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
