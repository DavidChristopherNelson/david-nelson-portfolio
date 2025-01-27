import Career from "./components/Career";
import Overview from "./components/Overview";
import GitHubActivityCalendar from "./components/GitHubActivityCalendar";
import SplashPage from "./components/SplashPage";
import TechStackBarChart from "./components/TechStackBarChart";
import { TypographyType } from "./components/Overview";

const App = () => {
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
        <TechStackBarChart />
        <GitHubActivityCalendar />
      <Career />
      <Career />
      <Career />
    </div>
  );
};

export default App;
