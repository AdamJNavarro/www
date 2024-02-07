interface TraktShowIds {
  imdb?: string;
  slug: string;
  tmdb: number;
  trakt: number;
  tvdb?: number;
  tvrage?: number;
}

interface TraktShowData {
  ids: TraktShowIds;
  title: string;
  year: number;
}

interface TraktListEntry {
  id: number;
  show: TraktShowData;
}

interface TraktShow {
  id: number;
  traktUrl: string;
  title: string;
  posterId: number;
  year: number;
}

interface TraktStatTotals {
  shows: number;
  episodes: number;
  minutes: number;
}

interface TraktListFetchVars {
  url: string;
  limit?: number;
}

type TraktListEndpoints =
  | 'currently-watching'
  | 'favorites'
  | 'watched'
  | 'watchlist';

export type {
  TraktListEndpoints,
  TraktListEntry,
  TraktListFetchVars,
  TraktShow,
  TraktStatTotals,
};
