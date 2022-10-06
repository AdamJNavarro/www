import type { NextRequest } from 'next/server';
import { getSpotifyAccessToken } from '~/lib/spotify';
import { buildNamesString } from '~/utils';

export const config = {
  runtime: 'experimental-edge',
};
export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get('limit');
  const token = await getSpotifyAccessToken();
  const response = await fetch(
    `https://api.spotify.com/v1/me/tracks?limit=${limit || 5}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { items } = await response.json();

  return new Response(
    JSON.stringify({
      tracks: items.map((item: any) => {
        const { artists, album, id, name, external_urls } = item.track;
        return {
          artist: buildNamesString(artists, 'name'),
          id,
          image: album.images[0].url,
          name,
          url: external_urls.spotify,
        };
      }),
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
