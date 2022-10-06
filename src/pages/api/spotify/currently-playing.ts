import type { NextRequest } from 'next/server';
import { getSpotifyAccessToken } from '~/lib/spotify';
import { buildNamesString } from '~/utils';

export const config = {
  runtime: 'experimental-edge',
};
export default async function handler(req: NextRequest) {
  const token = await getSpotifyAccessToken();
  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isActive: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  const data = await response.json();

  if (data.item === null) {
    return new Response(JSON.stringify({ isActive: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  const { artists, name, external_urls } = data.item;
  const playingItem = {
    title: `${name} by ${buildNamesString(artists, 'name')}`,
    href: external_urls.spotify,
  };

  return new Response(
    JSON.stringify({
      isActive: true,
      playingItem,
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    }
  );
}
