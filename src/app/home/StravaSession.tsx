import Dashboard from './Dashboard';

function buildStravaUrl(id: number): string {
  return `https://www.strava.com/activities/${id}`;
}

function getSessionType(type: string): string {
  if (type.includes('Bike')) return 'Bike Ride';
  if (type.includes('Run')) return 'Run';
  if (type.includes('WeightTraining')) return 'Weight Lifting';
  return 'Walk';
}

function getSessionDistance(distance: number): string {
  const distanceInMiles = distance * 0.000621371192;
  return `${distanceInMiles.toFixed(1)} mi`;
}

function getSessionDuration(duration: number): string {
  const hrs = Math.floor(duration / 3600);
  const mins = Math.floor((duration % 3600) / 60);
  const secs = Math.floor(duration % 60);

  let str = '';

  if (hrs > 0) {
    str += `${hrs}hr `;
  }

  if (mins > 0) {
    str += `${mins}m `;
  }

  if (secs > 0) {
    str += `${secs}s`;
  }

  return str;
}

function getSessionDate(date: any): string {
  const formattedDate = new Date(date).toLocaleString('en-us', {
    month: 'numeric',
    day: 'numeric',
    year: '2-digit',
  });
  return formattedDate;
}

export default function StravaSession({ data }) {
  const { id, distance, totalDuration, sport, date } = data;

  return (
    <Dashboard.Card
      label="Workout"
      href={buildStravaUrl(id)}
      darkLogo="/img/logos/strava.svg"
      lightLogo="/img/logos/strava.svg"
    >
      <Dashboard.Title>{getSessionType(sport)}</Dashboard.Title>
      <div className="flex space-x-2">
        <Dashboard.Details>{getSessionDate(date)}</Dashboard.Details>
        <Dashboard.Details>{getSessionDuration(totalDuration)}</Dashboard.Details>
        {sport !== 'WeightTraining' && (
          <Dashboard.Details>{getSessionDistance(distance)}</Dashboard.Details>
        )}
      </div>
    </Dashboard.Card>
  );
}
