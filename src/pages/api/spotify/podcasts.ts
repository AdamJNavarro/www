import type { NextApiRequest, NextApiResponse } from 'next';

import { getSpotifyAccessToken } from '~/lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = await getSpotifyAccessToken();
  const response = await fetch('https://api.spotify.com/v1/me/shows', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { items } = await response.json();

  return res.status(200).json({
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
  });
}
