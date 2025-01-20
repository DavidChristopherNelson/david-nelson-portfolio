import './App.css'
import { FadingGradientTextButton } from './components/ui/FadingGradientTextButton';
import GitHubActivity from './components/github-activity';
import { FadingGradientBackgroundButton } from './components/ui/FadingGradientBackgroundButton';
import profilePicture from './assets/profile-picture.png';
import profilePicture2 from './assets/profile-picture-2.png';
import profilePicture3 from './assets/profile-picture-3.png';
import profilePicture5 from './assets/profile-picture-5.png';


function App() {

  return (
    <>
      <div
        className="min-h-screen w-screen flex flex-col items-center justify-top gap-2 bg-black"
        style={{
          backgroundImage: `url(${profilePicture5})`,
          backgroundSize: 'auto 100%', // Ensures the image height matches the screen height
          backgroundPosition: 'right center', // Aligns the image to the right and vertically centers it
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        }}
      >
        <div
        >
          <h1 className="font-varela">David Nelson</h1>
          <p>Software Engineer, Entrepreneur, Chemical Engineer</p>
          <p>US and Australian Citizen</p>
          <p>hello@davidnelson.bio</p>
        </div>
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
      </div>
    </>
  )
}

export default App
