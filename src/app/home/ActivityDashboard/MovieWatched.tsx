import Dashboard from './Dashboard';
import { watched } from '~/app/interests/movies/letterboxd/letterboxd.data';

const film = watched[0];

export default function MovieWatched() {
  return (
    <Dashboard.Card
      label="Movie Watched"
      href={film.url}
      logo="/img/logos/letterboxd.svg"
    >
      <Dashboard.Title>{film.name}</Dashboard.Title>

      <Dashboard.Details>{film.year}</Dashboard.Details>
    </Dashboard.Card>
  );
}
