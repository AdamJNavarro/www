'use server';

import { MovieDb } from 'moviedb-promise';
import { handleServerActionError } from '~/utils';

const moviedb = new MovieDb(process.env.TMDB_KEY as string);

export async function getTmdbPoster(id: number): Promise<any> {
  try {
    const resp = await moviedb.tvImages({ id, language: 'en' });
    if (resp.posters && resp.posters.length) {
      return {
        data: resp.posters[0],
        error: null,
      };
    } else {
      throw new Error();
    }
  } catch (error) {
    handleServerActionError();
  }
}
