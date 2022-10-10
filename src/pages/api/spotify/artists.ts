import type { NextApiRequest, NextApiResponse } from 'next';

import { getSpotifyAccessToken } from '~/lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

  return res.status(200).json({
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
  });
}
