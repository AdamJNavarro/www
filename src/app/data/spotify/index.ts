'use server';

import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { buildNamesString, goFetch } from '~/utils';
import { SpotifyArtist, SpotifyPodcast, SpotifyTrack } from './spotify.types';

const client_id = process.env.SPOTIFY_CLIENT_ID as string;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
// Token Scopes:
// 'playlist-read-private, user-library-read, user-follow-read, user-read-currently-playing, user-read-recently-played, user-top-read';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

async function getAccessToken(): Promise<any> {
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
  return res.data;
}

export async function getLatestLikedSongs({
  limit,
}): Promise<SpotifyTrack | SpotifyTrack[]> {
  const token = await getAccessToken();
  const api = SpotifyApi.withAccessToken(client_id, token);
  const { items } = await api.currentUser.tracks.savedTracks(limit);
  const data = items.map((item: any) => {
    const { artists, album, id, name, external_urls } = item.track;
    return {
      artist: buildNamesString(artists, 'name'),
      id,
      image: album.images[0].url,
      name,
      url: external_urls.spotify,
    };
  });
  return limit === 1 ? data[0] : data;
}

export async function getSpotifyArtists(): Promise<SpotifyArtist[]> {
  const token = await getAccessToken();
  const api = SpotifyApi.withAccessToken(client_id, token);
  const { artists } = await api.currentUser.followedArtists();

  const data = artists.items.map((item: any) => {
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
  return data;
}

export async function getSpotifyPodcasts(): Promise<SpotifyPodcast[]> {
  const token = await getAccessToken();
  const api = SpotifyApi.withAccessToken(client_id, token);
  const { items } = await api.currentUser.shows.savedShows();

  const data = items.map((item: any) => {
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
  return data;
}
