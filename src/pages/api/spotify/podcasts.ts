import type { NextRequest } from 'next/server';
import { getSpotifyAccessToken } from '~/lib/spotify';

export const config = {
  runtime: 'experimental-edge',
};
export default async function handler(req: NextRequest) {
  const token = await getSpotifyAccessToken();
  const response = await fetch('https://api.spotify.com/v1/me/shows', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { items } = await response.json();

  return new Response(
    JSON.stringify({
      podcasts: items.map((item: any) => {
        const { id, images, name, external_urls, total_episodes, publisher } =
          item.show;
        return {
          id,
          image: images[0].url,
          name,
          publisher,
          total_episodes,
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
