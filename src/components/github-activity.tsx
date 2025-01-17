import GitHubCalendar from 'react-github-calendar';

function GitHubActivity() {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">My GitHub Activity</h2>
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
