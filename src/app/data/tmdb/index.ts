'use server';

import { MovieDb } from 'moviedb-promise';
import { handleServerActionError } from '~/utils';

const moviedb = new MovieDb(process.env.TMDB_KEY as string);

type GetTmdbPosterArgs = {
  type: (string & 'show') | 'season';
  showId: number;
  seasonNumber: number;
};

export async function getTmdbPoster({
  type,
  showId,
  seasonNumber = 1,
}: GetTmdbPosterArgs): Promise<any> {
  try {
    const resp =
      type === 'show'
        ? await moviedb.tvImages({ id: showId, language: 'en,null' })
        : await moviedb.seasonImages({
            language: 'en,null',
            season_number: seasonNumber,
            id: showId,
          });
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
