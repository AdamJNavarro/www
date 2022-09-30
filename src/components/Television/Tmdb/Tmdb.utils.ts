import { MovieDb } from 'moviedb-promise';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;
const moviedb = new MovieDb(TMDB_API_KEY);
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export async function getMovieConfig() {
  try {
    const res = await moviedb.configuration();
    return res;
  } catch (e) {
    return e;
  }
}

export async function getTvPoster(id: number): Promise<string> {
  const data = await moviedb.tvImages({ id });
  if (data.posters && data.posters.length) {
    return `${TMDB_IMAGE_BASE_URL}/original${data.posters[0].file_path}`;
  }
  return '';
}
