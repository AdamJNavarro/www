import type { NextApiRequest, NextApiResponse } from 'next';

import { getSpotifyAccessToken } from '~/lib/spotify';
import { buildNamesString } from '~/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { limit } = req.query;
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

  return res.status(200).json({
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
  });
}
