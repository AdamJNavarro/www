import { TraktListEntry, TraktShow } from './Trakt.types';

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

export async function traktFetch(url: string, access_token: string) {
  try {
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
        'trakt-api-key': TRAKT_CLIENT_ID,
        // @ts-ignore
        'trakt-api-version': 2,
      },
    });

    const isJson = resp.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await resp.json() : null;

    if (!resp.ok) {
      // get error message from body or default to resp status
      const error = (data && data.message) || resp.status;
      throw error;
    }

    return data;
  } catch (e) {
    return e;
  }
}

export async function getTraktListData(
  access_token: string,
  url: string,
  limit?: number
): Promise<TraktShow[]> {
  const data = await traktFetch(url, access_token);
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
