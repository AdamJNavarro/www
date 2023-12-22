import useSWR from 'swr';
import { fetcher, goFetch } from '~/utils';
import {
  SpotifyArtist,
  SpotifyCurrentlyPlaying,
  SpotifyPodcast,
  SpotifyTrack,
} from './spotify.types';

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;
// Token Scopes:
// 'playlist-read-private, user-library-read, user-follow-read, user-read-currently-playing, user-read-recently-played, user-top-read';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

export async function getSpotifyAccessToken(): Promise<any> {
  const res = await goFetch({
    url: SPOTIFY_TOKEN_URL,
    config: {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // @ts-ignore
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    },
  });
  //if (res.error) return;
  return res.data.access_token;
}

export function useSpotifyCurrentlyPlaying() {
  return useSWR<SpotifyCurrentlyPlaying>('/api/spotify/currently-playing', fetcher);
}

export function useSpotifyArtists() {
  return useSWR<{ artists: SpotifyArtist[] }>('/api/spotify/artists', fetcher, {
    fallbackData: { artists: [] },
  });
}

export function useSpotifyPodcasts() {
  return useSWR<{ podcasts: SpotifyPodcast[] }>('/api/spotify/podcasts', fetcher, {
    fallbackData: { podcasts: [] },
  });
}

export function useSpotifyTracks({ limit }: any) {
  return useSWR<{ tracks: SpotifyTrack[] }>(
    `/api/spotify/liked-tracks?limit=${limit}`,
    fetcher,
    {
      fallbackData: { tracks: [] },
    }
  );
}
