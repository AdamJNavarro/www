import type { NextRequest } from 'next/server';
import { traktFetch, TRAKT_FAVORITES_URL } from '~/lib/trakt';

export const config = {
  runtime: 'edge',
};
export default async function handler(req: NextRequest) {
  const response = await traktFetch(TRAKT_FAVORITES_URL);
  const shows = await response.json();

  return new Response(
    JSON.stringify({
      shows,
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
