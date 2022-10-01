import { Text, useMantineTheme } from '@mantine/core';
import dayjs from 'dayjs';

import DashboardCard from './DashboardCard';

const session = {
  distance: 24931.4,
  elapsed_time: 4500,
  type: 'Ride',
  sport_type: 'MountainBikeRide',
  id: 154504250376823,
  start_date: '2018-05-02T12:15:09Z',
  start_date_local: '2018-05-02T05:15:09Z',
  timezone: '(GMT-08:00) America/Los_Angeles',
  utc_offset: -25200,
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
  const theme = useMantineTheme();

  return (
    <DashboardCard
      label="Cardio Session"
      href="/"
      loading={false}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1664650740/logos/strava.png"
    >
      <Text weight={500} size={theme.fontSizes.lg}>
        {getSessionType(session.sport_type)}
      </Text>
      <Text size="md" weight={500}>
        {getSessionDistance(session.distance)} | {getSessionDuration(4536)} |{' '}
        {getSessionDate(session.start_date)}
      </Text>
    </DashboardCard>
  );
}
