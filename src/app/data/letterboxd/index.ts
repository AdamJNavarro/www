import { LetterboxdFilm } from '~/app/movies/letterboxd/letterboxd.types';
import data from './data.json';

export const letterboxdData = data as {
  watched: LetterboxdFilm[];
  updatedAt: any;
};
