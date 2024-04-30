import { formatDate, formatDuration } from '~/utils/Dates';
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
        <Dashboard.Details>{formatDuration(totalDuration)}</Dashboard.Details>
        {distance > 0 && (
          <Dashboard.Details>{getSessionDistance(distance)}</Dashboard.Details>
        )}
      </div>
    </Dashboard.Card>
  );
}
