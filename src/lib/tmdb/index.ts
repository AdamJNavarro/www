import { MovieDb } from 'moviedb-promise';
// @ts-ignore
const moviedb = new MovieDb(process.env.NEXT_PUBLIC_TMDB_KEY);

export async function getTvPoster(id: number): Promise<string> {
  const data = await moviedb.tvImages({ id });
  if (data.posters && data.posters.length) {
    return `https://image.tmdb.org/t/p/original${data.posters[0].file_path}`;
  }
  return '';
}
