import './App.css'
import GitHubActivity from './components/github-activity';

function App() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-2">
        <h1>David Nelson</h1>
        <p>Software Engineer, Entrepreneur, Chemical Engineer</p>
        <p>US and Australian Citizen</p>
        <p>hello@davidnelson.bio</p>
      </div>
      <GitHubActivity />
    </>
  )
}

export default App
