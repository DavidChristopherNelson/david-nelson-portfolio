import './App.css'
import { FadingGradientTextButton } from './components/ui/FadingGradientTextButton';
import GitHubActivity from './components/github-activity';
import { FadingGradientBackgroundButton } from './components/ui/FadingGradientBackgroundButton';
import profilePicture from './assets/profile-picture-9.png';
import { FadingGradientEye } from './components/ui/FadingGradientEye';
import { FadingGradientSplash } from './components/ui/FadingGradientSplash';
import CareerSection from './components/career-section';
import { JobSection } from './components/job-section';
import BarChart from './components/ui/BarChart';
import CareerOverview from './components/ui/CareerOverview';
import OverlappingDivs from './components/ui/OverlappingDivs';


function App() {
  const chartData = [
    { label: "React", value: 4 },
    { label: "Tailwind", value: 3 },
    { label: "TS", value: 3 },
    { label: "NextJS", value: 2 },
    { label: "Vercel", value: 2 },
    { label: "Python", value: 2 },
    { label: "Ruby", value: 2 },
    { label: "Kotlin", value: 1 },
    { label: "MongoDB", value: 1 },
    { label: "JS", value: 1 },
    { label: "PostgreSQL", value: 1 },
    { label: "Rails", value: 1 },
    { label: "Liveblocks", value: 1 },
    { label: "Convex", value: 1 },
    { label: "Prisma", value: 1 },
    { label: "NextAuth", value: 1 },
    { label: "TipTap", value: 1 },
    { label: "Shadcn", value: 1 },
    { label: "Clerk", value: 1 },
    { label: "Applescript", value: 1 }
  ];

  return (
    <>
      <div
        className="relative min-h-screen w-screen flex flex-col justify-top gap-2 bg-black"
        style={{
          backgroundImage: `url(${profilePicture})`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div>
          <FadingGradientEye />
          <FadingGradientEye />
          <FadingGradientEye />
          <FadingGradientEye />
          <FadingGradientEye />
          <FadingGradientEye />
          <FadingGradientEye />
          
          <FadingGradientSplash />
          <FadingGradientSplash />
          <FadingGradientSplash />
          <FadingGradientSplash />
          <FadingGradientSplash />
          <FadingGradientSplash />
          <FadingGradientSplash />
          <FadingGradientSplash />
        </div>
        <div
          className="absolute bottom-0 left-0 p-40 text-left"
          style={{ paddingBottom: '20vh' }}
        >
          <h1 
            style={{ 
              fontSize: "12rem",
              fontFamily: 'Consolas, "Menlo", "Courier New", monospace',
              margin: 0,
              lineHeight: 0.9,
              transform: "translateX(-10px)"
            }}
          >
            David
          </h1>
          <h1
            style={{ 
              fontSize: "12rem",
              fontFamily: 'Consolas, "Menlo", "Courier New", monospace',
              margin: 0,
              lineHeight: 0.9
            }}
          >
            Nelson
          </h1>
          <p
            className="text-2xl"
          >
            Software Developer / Entrepreneur / Engineer <br />
            US and Australian Citizen<br />
            hello@davidnelson.bio
          </p>
        </div>
      </div>
      <CareerSection />
      <CareerOverview />
      <div style={{position: "relative", width: "2000px", height: "24em", marginTop: "12em",}}>
        <BarChart data={chartData} />
        <div
          style={{
            position: "absolute",
            top: -15,
            left: 0,
            width: "100vw",
            height: "100%",
            background: "linear-gradient(to right, transparent, black)",
            pointerEvents: "none", // Ensure the gradient doesn't block interaction with the BarChart
          }}
        ></div>
      </div>
      <GitHubActivity />
      <OverlappingDivs />















      <div
        className="h-screen"
      ></div>
      <div
        className="h-screen"
      ></div>
      <JobSection />
      <div>
        <FadingGradientBackgroundButton variant="default" size="lg">
          Cool Gradient BG!!
        </FadingGradientBackgroundButton>
      </div>
      <div>
        <FadingGradientTextButton variant="default" size="lg">
          Gradient Text Button
        </FadingGradientTextButton>
      </div>
      <div
        style={{
          backgroundColor: "#008080",
          height: "100px",
          width: "100px"
        }}
      >
      </div>
      <div
        style={{
          backgroundColor: "#ee2e31",
          height: "100px",
          width: "100px"
        }}
      >
      </div>
    </>
  )
}

export default App
// e6ac00 006666
