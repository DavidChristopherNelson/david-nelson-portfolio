import Career from "./components/Career";
import Overview from "./components/Overview";
import GitHubActivityCalendar from "./components/GitHubActivityCalendar";
import SplashPage from "./components/SplashPage";
import TechStackBarChart from "./components/TechStackBarChart";
import { TypographyType } from "./components/Overview";

const App = () => {
  const techStackList = [
    { name: "React", frequency: 4 },
    { name: "TailwindCSS", frequency: 3 },
    { name: "Typescript", frequency: 3 },
    { name: "NextJS", frequency: 2 },
    { name: "Vercel", frequency: 2 },
    { name: "Python", frequency: 2 },
    { name: "Ruby", frequency: 2 },
    { name: "Kotlin", frequency: 1 },
    { name: "MongoDB", frequency: 1 },
    { name: "Javascript", frequency: 1 },
    { name: "PostgreSQL", frequency: 1 },
    { name: "Rails", frequency: 1 },
    { name: "Prisma", frequency: 1 },
    { name: "Liveblocks", frequency: 1 },
    { name: "Convex", frequency: 1 },
    { name: "NextAuth", frequency: 1 },
    { name: "TipTap", frequency: 1 },
    { name: "Shadcn", frequency: 1 },
    { name: "Clerk", frequency: 1 },
    { name: "Applescript", frequency: 1 }
  ];

  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
      "
    >
      <SplashPage />
      <Career />
        <Overview 
          textInfo={
            [
              {type: TypographyType.Big, text: "7"}, 
              {type: TypographyType.Double, text: "SOFTWARE PROJECTS"}, 
              {type: TypographyType.Small, text: "over"},
              {type: TypographyType.Big, text: "2"},
              {type: TypographyType.Double, text: "YEARS EXPERIENCE"},
              {type: TypographyType.Small, text: "at"},
              {type: TypographyType.Big, text: "2"},
              {type: TypographyType.Double, text: "INTERNATIONAL COMPANIES"}
            ]
          }
          backgroundText="SOFTWAREDEVELOPER"
        />
        <TechStackBarChart techStackList={techStackList} />
        <GitHubActivityCalendar />
      <Career />
      <Career />
      <Career />
    </div>
  );
};

export default App;
