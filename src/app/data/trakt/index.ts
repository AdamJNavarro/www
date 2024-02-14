'use server';

import { goFetch } from '~/utils';
import { TraktListEntry, TraktListIds } from './trakt.types';

const {
  TRAKT_CLIENT_ID,
  TRAKT_CLIENT_SECRET,
  TRAKT_ACCESS_TOKEN,
  TRAKT_REFRESH_TOKEN,
} = process.env;

const TRAKT_USERNAME = 'adamjnavarro';
const TRAKT_TOKEN_URL = 'https://api.trakt.tv/oauth/token';

const BASE_URL = `https://api.trakt.tv/users/${TRAKT_USERNAME}`;

const urls = {
  stats: `${BASE_URL}/stats`,
  history: `${BASE_URL}/history/shows`,
  watched: `${BASE_URL}/watched/shows?extended=noseasons`,
  watching: `${BASE_URL}/lists/currently-watching/items/show`,
  watchlist: `${BASE_URL}/watchlist/shows`,
  favorites: `${BASE_URL}/lists/favorite-tv/items/show`,
};

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

function buildTraktItems(data: any[]) {
  return data.map((item: TraktListEntry) => {
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

function getListUrl(listId: TraktListIds): string {
  return urls[listId];
}

export async function getTraktListItems({
  listId,
  limit,
}: {
  listId: TraktListIds;
  limit?: number;
}) {
  const url = getListUrl(listId);
  const finalUrl = limit ? `${url}?page=1&limit=${limit}` : url;
  const response = await traktFetch(`${finalUrl}`);
  const data = await response.json();
  return buildTraktItems(data);
}

export async function getTraktStats() {
  const response = await traktFetch(urls.stats);
  const { shows, episodes } = await response.json();

  return {
    shows: shows.watched,
    episodes: episodes.watched,
    minutes: episodes.minutes,
  };
}

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
