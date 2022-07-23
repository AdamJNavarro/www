import { SpotifyArtist, SpotifyPodcast, SpotifyTrack } from './Spotify.types';

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;
const scopes =
  'playlist-read-private, user-library-read, user-follow-read, user-read-currently-playing, user-read-recently-played, user-top-read';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_USER_BASE_URL = 'https://api.spotify.com/v1/me';
const SPOTIFY_ARTISTS_URL = `${SPOTIFY_USER_BASE_URL}/following?type=artist`;
const SPOTIFY_PODCASTS_URL = `${SPOTIFY_USER_BASE_URL}/shows`;
const SPOTIFY_TRACKS_URL = `${SPOTIFY_USER_BASE_URL}/tracks`;
export const SPOTIFY_NUM_OF_TRACKS = 6;

export async function getSpotifyAccessToken() {
  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  const payload = await response.json();
  return payload;
}

export async function getSpotifyArtists(
  access_token: string
): Promise<SpotifyArtist[]> {
  const response = await fetch(`${SPOTIFY_ARTISTS_URL}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (await response.json()).artists.items.map((item: any) => {
    const { followers, genres, id, images, external_urls, name } = item;
    return {
      followers: followers.total,
      genres,
      id,
      image: images[images.length - 1].url,
      name,
      url: external_urls.spotify,
    };
  });
}

export async function getSpotifyPodcasts(
  access_token: string
): Promise<SpotifyPodcast[]> {
  const response = await fetch(`${SPOTIFY_PODCASTS_URL}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return (await response.json()).items.map((item: any) => {
    const { id, images, name, external_urls, total_episodes, publisher } = item.show;
    return {
      id,
      image: images[0].url,
      name,
      publisher,
      total_episodes,
      url: external_urls.spotify,
    };
  });
}

export async function getLastLikedTracks(
  access_token: string
): Promise<SpotifyTrack[]> {
  const response = await fetch(
    `${SPOTIFY_TRACKS_URL}?limit=${SPOTIFY_NUM_OF_TRACKS}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  return (await response.json()).items.map((item: any) => {
    const { artists, album, id, name, external_urls } = item.track;
    return {
      artist: artists.map((_artist: any) => _artist.name).join(', '),
      id,
      image: album.images[0].url,
      name,
      url: external_urls.spotify,
    };
  });
}
