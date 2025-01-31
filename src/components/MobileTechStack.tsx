interface TechStackBarChartProps {
  techStackList: {
    name: string;
    frequency: number;
  }[];
}
const MobileTechStack = ({ techStackList }: TechStackBarChartProps) => {
  return (
    <div
      className="flex items-center justify-center"
    >
      {techStackList.map((tech) => {
        return(
          <div>
            <i className={`devicon-${tech.name.toLowerCase()}-plain`}></i>
          </div>
        )
      })}
    </div>
  )
}

export default MobileTechStack;
