import useFetch, { IncomingOptions } from 'use-http';

import { CustomFetchArgs } from '~/utils';
import { TraktListEntry, TraktShow, TraktStatTotals } from './Trakt.types';

const TRAKT_CLIENT_ID = process.env.NEXT_PUBLIC_TRAKT_CLIENT_ID;
const TRAKT_CLIENT_SECRET = process.env.NEXT_PUBLIC_TRAKT_CLIENT_SECRET;
const TRAKT_REFRESH_TOKEN = process.env.NEXT_PUBLIC_TRAKT_REFRESH_TOKEN;

const TRAKT_USERNAME = 'adamjnavarro';
const TRAKT_TOKEN_ENDPOINT = 'https://api.trakt.tv/oauth/token';

export const TRAKT_USER_BASE_URL = `https://api.trakt.tv/users/${TRAKT_USERNAME}`;

export const traktUrls = {
  recentlyWatched: `${TRAKT_USER_BASE_URL}/watched/shows?extended=noseasons`,
  currentlyWatching: `${TRAKT_USER_BASE_URL}/lists/currently-watching/items/show`,
  favorites: `${TRAKT_USER_BASE_URL}/lists/favorite-tv/items/show`,
  stats: `${TRAKT_USER_BASE_URL}/stats`,
};

export async function getTraktAccessToken() {
  const response = await fetch(TRAKT_TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: TRAKT_CLIENT_ID,
      client_secret: TRAKT_CLIENT_SECRET,
      redirect_uri: 'http://localhost:3000',
      grant_type: 'refresh_token',
      refresh_token: TRAKT_REFRESH_TOKEN,
    }),
  });

  const tokenData = await response.json();
  //console.log('TD:', tokenData);
  return tokenData;
}

const defaultFetchOpts = {
  headers: {
    'Content-Type': 'application/json',
    'trakt-api-key': TRAKT_CLIENT_ID,
    'trakt-api-version': '2',
  },
};

function buildFetchOpts(opts: IncomingOptions): IncomingOptions {
  return {
    ...defaultFetchOpts,
    ...opts,
    headers: {
      ...defaultFetchOpts.headers,
      ...opts.headers,
    },
  };
}

export function useTraktStatsFetch({ opts }: CustomFetchArgs) {
  const options = buildFetchOpts(opts);
  return useFetch<TraktStatTotals>(
    traktUrls.stats,
    {
      ...options,
      interceptors: {
        response: async ({ response }) => {
          const { shows, episodes } = response.data;
          response.data = {
            shows: shows.watched,
            episodes: episodes.watched,
            minutes: episodes.minutes,
          };
          return response;
        },
      },
    },
    []
  );
}
interface TraktListFetchVars {
  url: string;
  limit?: number;
}

export function useTraktListFetch({
  opts,
  vars,
}: CustomFetchArgs<TraktListFetchVars>) {
  const options = buildFetchOpts(opts);
  return useFetch<TraktShow[]>(
    vars.url,
    {
      ...options,
      interceptors: {
        response: async ({ response }) => {
          response.data = response.data
            .slice(0, vars.limit || response.data.length)
            .map((item: TraktListEntry) => {
              const { ids, title, year } = item.show;
              return {
                id: item.id,
                traktUrl: `https://trakt.tv/shows/${ids.slug}`,
                title,
                posterId: ids.tmdb,
                year,
              };
            });
          return response;
        },
      },
    },
    []
  );
}
