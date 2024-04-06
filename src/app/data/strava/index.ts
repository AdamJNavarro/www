'use server';

import { unstable_noStore as noStore } from 'next/cache';
import { goFetch, handleServerActionError, unixTimestampToDate } from '~/utils';
import { saveApiTokens } from '../db/actions';
import { getApiTokens } from '../db/queries';

const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } = process.env;

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

  const expiresTimestamp = unixTimestampToDate(res.data.expires_at);

  return res.data.access_token;
}

async function generateStravaTokens(refreshToken: string) {
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
        refresh_token: refreshToken,
      }),
    },
  });

  const { access_token, refresh_token, expires_at } = res.data;
  const updVal = await saveApiTokens({
    provider: 'strava',
    accessToken: access_token,
    refreshToken: refresh_token,
    expirationDate: unixTimestampToDate(expires_at),
  });
  console.log('UPD VAL', updVal);
  return updVal;
}

async function getStravaToken() {
  noStore();
  try {
    const { accessToken, refreshToken, expirationDate } =
      await getApiTokens('strava');
    const tokenExpirationDate = new Date(expirationDate);
    const currentDate = new Date();
    if (currentDate > tokenExpirationDate) {
      console.log('Expired token -- generate new');
      // token expired - generate new
      const freshTokens = await generateStravaTokens(refreshToken);
      console.log('FRresh Tokens', freshTokens);
      return freshTokens?.access_token;
    } else {
      return accessToken;
    }
  } catch (error) {
    handleServerActionError();
  }
}

export async function getLatestStravaActivity() {
  try {
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
    })[0];

    return {
      data: activity,
      error: null,
    };
  } catch (error) {
    return handleServerActionError();
  }
}

export async function getStravaActivities({ params }: { params: string }) {
  try {
    const token = await getStravaToken();
    const response = await fetch(
      `https://www.strava.com/api/v3/athlete/activities?${params}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    const activities = data.map((obj) => {
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
    });

    return {
      data: activities,
      error: null,
    };
  } catch (error) {
    return handleServerActionError();
  }
}
