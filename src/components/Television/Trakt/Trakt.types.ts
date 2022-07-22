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
  hours: number;
}

interface TraktStat {
  label: string;
  value: number;
  //color: string;
  icon: any;
}

export type { TraktListEntry, TraktShow, TraktStat, TraktStatTotals };
