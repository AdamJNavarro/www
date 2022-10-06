import type { NextRequest } from 'next/server';
import { getSpotifyAccessToken } from '~/lib/spotify';

export const config = {
  runtime: 'experimental-edge',
};
export default async function handler(req: NextRequest) {
  const token = await getSpotifyAccessToken();
  const response = await fetch(
    'https://api.spotify.com/v1/me/following?type=artist',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { artists } = await response.json();

  return new Response(
    JSON.stringify({
      artists: artists.items.map((item: any) => {
        const { followers, genres, id, images, external_urls, name } = item;
        return {
          followers: followers.total,
          genres,
          id,
          image: images[images.length - 1].url,
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
