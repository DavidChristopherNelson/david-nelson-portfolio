import Career from "./components/Career";
import Overview from "./components/Overview";
import GitHubActivityCalendar from "./components/GitHubActivityCalendar";
import SplashPage from "./components/SplashPage";
import TechStackBarChart from "./components/TechStackBarChart";

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
      <Overview />
      <Career />
        <Overview />
        <TechStackBarChart />
        <GitHubActivityCalendar />
      <Career />
      <Career />
      <Career />
    </div>
  );
};

export default App;
