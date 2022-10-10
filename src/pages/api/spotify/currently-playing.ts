import type { NextApiRequest, NextApiResponse } from 'next';

import { getSpotifyAccessToken } from '~/lib/spotify';
import { buildNamesString } from '~/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
    return res.status(200).json({ isActive: false });
  }

  const { artists, name, external_urls } = data.item;
  const playingItem = {
    title: `${name} by ${buildNamesString(artists, 'name')}`,
    href: external_urls.spotify,
  };

  return res.status(200).json({ isActive: true, playingItem });
}
