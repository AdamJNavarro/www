import type { NextApiRequest, NextApiResponse } from 'next';
import { getStravaAccessToken } from '~/lib/strava';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getStravaAccessToken();
  const response = await fetch(
    'https://www.strava.com/api/v3/athlete/activities?page=1&per_page=1',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  return res.status(200).json({
    activities: data.map((obj) => {
      const { id, distance, moving_time, elapsed_time, sport_type, start_date } =
        obj;
      return {
        id,
        distance,
        totalDuration: elapsed_time,
        movingDuration: moving_time,
        sport: sport_type,
        date: start_date,
      };
    }),
  });
}
