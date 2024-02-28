import ky from 'ky';
import { loadEnvConfig } from '@next/env';
import fs from 'fs/promises';

loadEnvConfig(process.cwd());
const token = process.env.TRAKT_ACCESS_TOKEN;
const client_id = process.env.TRAKT_CLIENT_ID;

const TRAKT_USERNAME = 'adamjnavarro';
const TRAKT_TOKEN_URL = 'https://api.trakt.tv/oauth/token';

const BASE_URL = `https://api.trakt.tv/users/${TRAKT_USERNAME}`;

const urls = {
  stats: `${BASE_URL}/stats`,
  history: `${BASE_URL}/history/shows`,
  watched: `${BASE_URL}/watched/shows?extended=noseasons`,
  watching: `${BASE_URL}/lists/currently-watching/items/show`,
  watchlist: `${BASE_URL}/watchlist/shows`,
  favorites: `${BASE_URL}/lists/favorite-tv/items/show`,
};

export async function traktFetch(url: string): Promise<any> {
  return ky
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'trakt-api-key': client_id,
        'trakt-api-version': '2',
      },
    })
    .json();
}

function flattenTraktShowData(data: any[]) {
  return data.map((item: any) => {
    const { ids, title, year, overview, status, genres } = item.show;
    return {
      id: item.id,
      rank: item.rank,
      dateAdded: item.listed_at,
      showIds: ids,
      url: `https://trakt.tv/shows/${ids.slug}`,
      title,
      year,
      overview,
      status,
      genres,
    };
  });
}

function generateGenresData(shows) {
  const genresObj = {};
  shows.forEach((item) => {
    const { genres } = item;
    genres.forEach((str) => {
      if (genresObj[str]) {
        // eslint-disable-next-line no-plusplus
        genresObj[str]++;
      } else {
        genresObj[str] = 1;
      }
    });
  });

  const data = Object.keys(genresObj)
    .map((key) => ({
      genre: key.replaceAll('-', ' '),
      total: genresObj[key],
    }))
    .sort((a, b) => b.total - a.total);
  return data;
}

async function generateTraktData() {
  const statsData = await traktFetch(urls.stats);
  const stats = {
    shows: statsData.shows.watched,
    episodes: statsData.episodes.watched,
    minutes: statsData.episodes.minutes,
  };

  const favoritesData = await traktFetch(`${urls.favorites}?extended=full`);
  const favorites = flattenTraktShowData(favoritesData);

  const watchingData = await traktFetch(`${urls.watching}?extended=full`);
  const watching = flattenTraktShowData(watchingData);

  const watchlistData = await traktFetch(`${urls.watchlist}?extended=full`);
  const watchlist = flattenTraktShowData(watchlistData);

  const watchedData = await traktFetch(`${urls.watched}&extended=full`);
  const watched = watchedData.map((item: any) => {
    const { ids, title, year, overview, status, genres } = item.show;
    return {
      id: ids.trakt,
      dateAdded: item.last_watched_at,
      showIds: ids,
      url: `https://trakt.tv/shows/${ids.slug}`,
      title,
      year,
      overview,
      status,
      genres,
    };
  });

  const genres = generateGenresData(watched);
  const completeData = JSON.stringify(
    {
      updatedAt: new Date(),
      stats,
      watching,
      watchlist,
      watched,
      favorites,
      genres,
    },
    null,
    2
  );
  await fs.writeFile('./src/app/data/trakt/data.json', completeData, 'utf-8');
}

generateTraktData();
