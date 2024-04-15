import { formatDate } from '~/utils/Dates';
import Dashboard from './Dashboard';

function buildStravaUrl(id: number): string {
  return `https://www.strava.com/activities/${id}`;
}

function makeSportTypeReadable(sport: string): string {
  return sport.replace(/([A-Z])/g, ' $1').trim();
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

export default function StravaSession({ data }) {
  const { id, distance, totalDuration, sport, date } = data;

  return (
    <Dashboard.Card
      label="Workout Logged"
      href={buildStravaUrl(id)}
      darkLogo="/img/logos/strava.svg"
      lightLogo="/img/logos/strava.svg"
    >
      <Dashboard.Title>{makeSportTypeReadable(sport)}</Dashboard.Title>
      <div className="flex space-x-2">
        <Dashboard.Details>
          {formatDate({ date, format: 'short' })}
        </Dashboard.Details>
        <Dashboard.Details>{getSessionDuration(totalDuration)}</Dashboard.Details>
        {distance > 0 && (
          <Dashboard.Details>{getSessionDistance(distance)}</Dashboard.Details>
        )}
      </div>
    </Dashboard.Card>
  );
}
