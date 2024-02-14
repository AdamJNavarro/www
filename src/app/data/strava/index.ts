'use server';

import { goFetch } from '~/utils';

const STRAVA_CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = process.env.NEXT_PUBLIC_STRAVA_REFRESH_TOKEN;
const STRAVA_TOKEN_URL = 'https://www.strava.com/api/v3/oauth/token';

async function getStravaAccessToken() {
  const res = await goFetch({
    url: STRAVA_TOKEN_URL,
    config: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // @ts-ignore
      body: new URLSearchParams({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        redirect_uri: 'http://localhost:3000',
        grant_type: 'refresh_token',
        refresh_token: STRAVA_REFRESH_TOKEN,
      }),
    },
  });

  return res.data.access_token;
}

export async function getLatestStravaActivity() {
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

  const activity = data.map((obj) => {
    const { id, distance, moving_time, elapsed_time, sport_type, start_date } = obj;
    return {
      id,
      distance,
      totalDuration: elapsed_time,
      movingDuration: moving_time,
      sport: sport_type,
      date: start_date,
    };
  })[0];

  return activity;
}
