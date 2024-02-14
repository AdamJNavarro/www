'use server';

import { MovieDb } from 'moviedb-promise';

const moviedb = new MovieDb(process.env.TMDB_KEY as string);

export async function getTmdbPoster(id: number): Promise<string> {
  const data = await moviedb.tvImages({ id });
  if (data.posters && data.posters.length) {
    return `https://image.tmdb.org/t/p/original${data.posters[0].file_path}`;
  }
  return '';
}
