import GitHubCalendar from 'react-github-calendar';

function GitHubActivity() {
  return (
    <div className="my-4">
      <a 
        href="https://github.com/DavidChristopherNelson" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xl font-bold mb-2"
      >
        <h2>My GitHub Activity</h2>
      </a>
      <GitHubCalendar
        username="DavidChristopherNelson"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </div>
  );
}

export default GitHubActivity;
