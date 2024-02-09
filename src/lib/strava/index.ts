import useSWR from 'swr';
import { fetcher, goFetch } from '~/utils';
import { StravaActivity } from './strava.types';

const STRAVA_CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = process.env.NEXT_PUBLIC_STRAVA_REFRESH_TOKEN;
const STRAVA_ATHLETE_ID = process.env.NEXT_PUBLIC_STRAVA_ATHLETE_ID;
const STRAVA_TOKEN_URL = 'https://www.strava.com/api/v3/oauth/token';
const STRAVA_STATS_URL = `https://www.strava.com/api/v3/athletes/${STRAVA_ATHLETE_ID}/stats`;
const STRAVA_ACTIVITIES_URL = 'https://www.strava.com/api/v3/athlete/activities';

export function buildStravaUrl(id: number): string {
  return `https://www.strava.com/activities/${id}`;
}

export async function getStravaAccessToken() {
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

export function useStravaActivities() {
  return useSWR<{ activities: StravaActivity[] }>('/api/strava/activities', fetcher);
}
