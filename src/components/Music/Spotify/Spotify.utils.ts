/* eslint-disable no-param-reassign */
import useFetch, { IncomingOptions } from 'use-http';
import { CustomFetchArgs, goFetch } from '~/utils';
import {
  areCredsExpired,
  getLocalStorage,
  LocalCreds,
  localStorageKeys,
  storeLocalCreds,
} from '~/utils/Storage';
import {
  SpotifyArtist,
  SpotifyCurrentlyPlaying,
  SpotifyPodcast,
  SpotifyTrack,
} from './Spotify.types';

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;
// Token Scopes:
// 'playlist-read-private, user-library-read, user-follow-read, user-read-currently-playing, user-read-recently-played, user-top-read';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_USER_BASE_URL = 'https://api.spotify.com/v1/me';
const SPOTIFY_CURRENTLY_PLAYING_URL = `${SPOTIFY_USER_BASE_URL}/player/currently-playing`;
const SPOTIFY_ARTISTS_URL = `${SPOTIFY_USER_BASE_URL}/following?type=artist`;
const SPOTIFY_PODCASTS_URL = `${SPOTIFY_USER_BASE_URL}/shows`;
const SPOTIFY_TRACKS_URL = `${SPOTIFY_USER_BASE_URL}/tracks`;

async function generateSpotifyCreds(): Promise<LocalCreds> {
  const res = await goFetch({
    url: SPOTIFY_TOKEN_URL,
    config: {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token,
      }),
    },
  });
  //if (res.error) return;
  const creds = storeLocalCreds({
    storageKey: localStorageKeys.spotifyCreds,
    accessToken: res.data.access_token,
    expiresIn: res.data.expires_in,
  });

  return creds;
}

async function getSpotifyCreds(): Promise<LocalCreds> {
  const creds = getLocalStorage(localStorageKeys.spotifyCreds);
  if (!creds) {
    return generateSpotifyCreds();
  }

  if (areCredsExpired(creds)) {
    return generateSpotifyCreds();
  }
  return creds;
}

const defaultFetchOpts: IncomingOptions = {
  interceptors: {
    request: async ({ options }) => {
      const creds = await getSpotifyCreds();

      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${creds.accessToken}`,
      };
      return options;
    },
  },
};

export function useSpotifyCurrentlyPlaying({ opts }: CustomFetchArgs) {
  return useFetch<SpotifyCurrentlyPlaying>(
    SPOTIFY_CURRENTLY_PLAYING_URL,
    {
      ...opts,
      interceptors: {
        response: async ({ response }) => {
          if (!response.data) {
            response.data = { isActive: false, playingItem: null };
          }
          const { currently_playing_type, item } = response.data;
          if (currently_playing_type === 'episode') {
            response.data = { isActive: false, playingItem: null };
          }

          if (currently_playing_type === 'track') {
            const { artists, name, external_urls } = item;
            const playingItem = {
              title: `${name} by ${artists
                .map((_artist: any) => _artist.name)
                .join(', ')}`,
              href: external_urls.spotify,
            };
            response.data = { isActive: true, playingItem };
          }

          return response;
        },
      },
    },
    []
  );
}

export function useSpotifyArtistsFetch({ opts }: CustomFetchArgs) {
  return useFetch<SpotifyArtist[]>(
    SPOTIFY_ARTISTS_URL,
    {
      ...opts,
      interceptors: {
        ...defaultFetchOpts.interceptors,
        response: async ({ response }) => {
          response.data = response.data.artists.items.map((item: any) => {
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
          return response;
        },
      },
    },
    []
  );
}

export function useSpotifyPodcastsFetch({ opts }: CustomFetchArgs) {
  return useFetch<SpotifyPodcast[]>(
    SPOTIFY_PODCASTS_URL,
    {
      ...opts,
      interceptors: {
        ...defaultFetchOpts.interceptors,
        response: async ({ response }) => {
          response.data = response.data.items.map((item: any) => {
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
          });
          return response;
        },
      },
    },
    []
  );
}

export function useSpotifyTracksFetch({
  opts,
  vars,
}: CustomFetchArgs<{
  num: number;
}>) {
  return useFetch<SpotifyTrack[]>(
    `${SPOTIFY_TRACKS_URL}?limit=${vars.num}`,
    {
      ...opts,
      interceptors: {
        ...defaultFetchOpts.interceptors,
        response: async ({ response }) => {
          response.data = response.data.items.map((item: any) => {
            const { artists, album, id, name, external_urls } = item.track;
            return {
              artist: artists.map((_artist: any) => _artist.name).join(', '),
              id,
              image: album.images[0].url,
              name,
              url: external_urls.spotify,
            };
          });
          return response;
        },
      },
    },
    []
  );
}
