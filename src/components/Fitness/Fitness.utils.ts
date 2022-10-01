import useFetch from 'use-http';
import { CustomFetchArgs, goFetch } from '~/utils';

const STRAVA_CLIENT_ID = process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET;
const STRAVA_REFRESH_TOKEN = process.env.NEXT_PUBLIC_STRAVA_REFRESH_TOKEN;
const STRAVA_ATHLETE_ID = process.env.NEXT_PUBLIC_STRAVA_ATHLETE_ID;
const STRAVA_TOKEN_URL = 'https://www.strava.com/api/v3/oauth/token';
const STRAVA_STATS_URL = `https://www.strava.com/api/v3/athletes/${STRAVA_ATHLETE_ID}/stats`;
const STRAVA_ACTIVITIES_URL = 'https://www.strava.com/api/v3/athlete/activities';

export function getStravaAccessToken() {
  return goFetch({
    url: STRAVA_TOKEN_URL,
    config: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        redirect_uri: 'http://localhost:3000',
        grant_type: 'refresh_token',
        refresh_token: STRAVA_REFRESH_TOKEN,
      }),
    },
  });
}

export function useStravaStatsFetch({ opts }: CustomFetchArgs) {
  return useFetch<any>(
    STRAVA_STATS_URL,
    {
      ...opts,
    },
    []
  );
}

type StravaSport = 'Ride' | 'Run' | 'Walk';

interface StravaActivity {
  id: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  sport_type: StravaSport;
  start_date: string;
}

export function useStravaActivitiesFetch({ opts }: CustomFetchArgs) {
  return useFetch<StravaActivity[]>(
    STRAVA_ACTIVITIES_URL,
    {
      ...opts,
    },
    []
  );
}

export function useStravaRecentActivityFetch({ opts }: CustomFetchArgs) {
  return useFetch<StravaActivity[]>(
    `${STRAVA_ACTIVITIES_URL}?per_page=1`,
    {
      ...opts,
    },
    []
  );
}
