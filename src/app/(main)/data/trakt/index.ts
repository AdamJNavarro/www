import data from './data.json';

export type TraktShowIds = {
  imdb?: any;
  slug: string;
  tmdb: number;
  trakt: number;
  tvdb?: any;
  tvrage?: any;
};

export type TraktShow = {
  id: number;
  showIds: TraktShowIds;
  url: string;
  title: string;
  year: number;
  genres: string[];
};

export type TraktStatTotals = {
  shows: number;
  episodes: number;
  minutes: number;
};

export type TraktListIds =
  | 'history'
  | 'watched'
  | 'watching'
  | 'watchlist'
  | 'favorites';

export const traktData = data as {
  stats: TraktStatTotals;
  favorites: TraktShow[];
  watching: TraktShow[];
  watchlist: TraktShow[];
  watched: TraktShow[];
  genres: any[];
  updatedAt: any;
};

export const lastShowWatched = traktData.watched[0];
