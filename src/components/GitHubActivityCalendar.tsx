import GitHubCalendar from 'react-github-calendar';

const GitHubActivity = () => {
  const customTheme = {
    light: ['#f0f0f0', '#fcbf49', '#f77f00', '#d62828', '#6a4c93'], // Your custom light theme
    dark: ['#121212', '#008080', '#559D55', '#AABA2B', '#FFD700'], // Your custom dark theme
  };

  const customLabels = {
    totalCount: '{{count}} contributions in the last year out of 777 life time contributions',
    less: 'Fewer contributions',
    more: 'More contributions',
  };

  return (
    <div className="my-4 h-96">
      <div className="flex justify-center">
        <GitHubCalendar
          username="DavidChristopherNelson"
          theme={customTheme}
          labels={customLabels}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />  
      </div>
    </div>
  );
}

export default GitHubActivity;
