import Career from "./components/Career";
import CareerOverview from "./components/CareerOverview";
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
      <Career />
        <CareerOverview />
        <TechStackBarChart />
        <GitHubActivityCalendar />
      <Career />
      <Career />
      <Career />
    </div>
  );
};

export default App;
