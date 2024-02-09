import useSWR from 'swr';
import { fetcher, goFetch } from '~/utils';
import {
  TraktListEndpoints,
  TraktListEntry,
  TraktShow,
  TraktStatTotals,
} from './trakt.types';

const TRAKT_CLIENT_ID = process.env.NEXT_PUBLIC_TRAKT_CLIENT_ID;
const TRAKT_CLIENT_SECRET = process.env.NEXT_PUBLIC_TRAKT_CLIENT_SECRET;
const TRAKT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TRAKT_ACCESS_TOKEN;
const TRAKT_REFRESH_TOKEN = process.env.NEXT_PUBLIC_TRAKT_REFRESH_TOKEN;

const TRAKT_USERNAME = 'adamjnavarro';
const TRAKT_TOKEN_URL = 'https://api.trakt.tv/oauth/token';

export const TRAKT_USER_BASE_URL = `https://api.trakt.tv/users/${TRAKT_USERNAME}`;
export const TRAKT_STATS_URL = `${TRAKT_USER_BASE_URL}/stats`;
export const TRAKT_WATCHED_URL = `${TRAKT_USER_BASE_URL}/watched/shows?extended=noseasons`;
export const TRAKT_CURRENTLY_WATCHING_URL = `${TRAKT_USER_BASE_URL}/lists/currently-watching/items/show`;
export const TRAKT_FAVORITES_URL = `${TRAKT_USER_BASE_URL}/lists/favorite-tv/items/show`;
export const TRAKT_WATCHLIST_URL = `${TRAKT_USER_BASE_URL}/watchlist/shows`;

async function generateTraktCreds(): Promise<any> {
  const res = await goFetch({
    url: TRAKT_TOKEN_URL,
    config: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // @ts-ignore
      body: new URLSearchParams({
        client_id: TRAKT_CLIENT_ID,
        client_secret: TRAKT_CLIENT_SECRET,
        redirect_uri: 'http://localhost:3000',
        grant_type: 'refresh_token',
        refresh_token: TRAKT_REFRESH_TOKEN,
      }),
    },
  });

  //if (res.error) return;
  return res;
}

// https://stackoverflow.com/questions/44820568/set-default-header-for-every-fetch-request

export async function traktFetch(url: string) {
  return fetch(url, {
    // @ts-ignore
    headers: {
      Authorization: `Bearer ${TRAKT_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      'trakt-api-key': TRAKT_CLIENT_ID,
      'trakt-api-version': '2',
    },
  });
}

export function buildTraktItems(data: any[], limit?: number) {
  return data.slice(0, limit || data.length).map((item: TraktListEntry) => {
    const { ids, title, year } = item.show;
    return {
      id: item.id,
      traktUrl: `https://trakt.tv/shows/${ids.slug}`,
      title,
      posterId: ids.tmdb,
      year,
    };
  });
}

export function useTraktStats() {
  return useSWR<TraktStatTotals>('/api/trakt/stats', fetcher, {
    fallbackData: {
      shows: 0,
      episodes: 0,
      minutes: 0,
    },
  });
}

interface UseTraktListArgs {
  listId: TraktListEndpoints;
  limit?: number;
}

export function useTraktList({ listId, limit }: UseTraktListArgs) {
  const { data, isLoading, error } = useSWR<{ shows: TraktShow[] }>(
    `/api/trakt/${listId}`,
    fetcher,
    {
      fallbackData: { shows: [] },
    }
  );
  // @ts-ignore
  return { data: { shows: buildTraktItems(data.shows, limit) }, isLoading, error };
}
