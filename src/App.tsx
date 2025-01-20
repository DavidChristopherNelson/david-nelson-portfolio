import './App.css'
import { FadingGradientTextButton } from './components/ui/FadingGradientTextButton';
import GitHubActivity from './components/github-activity';
import { FadingGradientBackgroundButton } from './components/ui/FadingGradientBackgroundButton';
import profilePicture from './assets/profile-picture-8.png';
import { FadingGradientEye } from './components/ui/FadingGradientEye';
import { FadingGradientSplash } from './components/ui/FadingGradientSplash';
import CareerSection from './components/career-section';
import { JobSection } from './components/job-section';


function App() {

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
            Software Engineer / Entrepreneur / Chemical Engineer<br />
            US and Australian Citizen<br />
            hello@davidnelson.bio
          </p>
        </div>
      </div>
      <CareerSection />
      <JobSection />
      <GitHubActivity />
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
    </>
  )
}

export default App
