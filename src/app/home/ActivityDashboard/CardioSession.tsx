import dayjs from 'dayjs';
import { buildStravaUrl } from '~/lib/strava';
import Dashboard from './Dashboard';

const session = {
  distance: 1629.4,
  elapsed_time: 544,
  sport_type: 'Run',
  id: 7896652231,
  start_date: '2022-10-01T21:32:05Z',
};

function getSessionType(type: string): string {
  if (type.includes('Bike')) return 'Bike Ride';
  if (type.includes('Run')) return 'Run';
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
  return `${dayjs(date).format('M/D/YY')}`;
}

export default function CardioSession() {
  return (
    <Dashboard.Card
      label="Cardio Session"
      href={buildStravaUrl(session.id)}
      loading={false}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1664650740/logos/strava.png"
    >
      <Dashboard.Title>{getSessionType(session.sport_type)}</Dashboard.Title>
      <Dashboard.Details>
        {getSessionDistance(session.distance)} |{' '}
        {getSessionDuration(session.elapsed_time)} |{' '}
        {getSessionDate(session.start_date)}
      </Dashboard.Details>
    </Dashboard.Card>
  );
}
