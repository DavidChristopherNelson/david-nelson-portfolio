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
      <Overview 
        textInfo={
          [
            {type: TypographyType.Big, text: "7"}, 
            {type: TypographyType.Double, text: "SOFTWARE PROJECTS"}, 
            {type: TypographyType.Small, text: "over"}
          ]
        }
      />
      <Career />
        <TechStackBarChart />
        <GitHubActivityCalendar />
      <Career />
      <Career />
      <Career />
    </div>
  );
};

export default App;
