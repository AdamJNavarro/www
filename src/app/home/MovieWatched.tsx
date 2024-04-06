import Dashboard from './Dashboard';
import { watched } from '~/app/movies/letterboxd/letterboxd.data';

const film = watched[0];

export default function MovieWatched() {
  return (
    <Dashboard.Card
      label="Movie Watched"
      href={film.url}
      darkLogo="/img/logos/letterboxd.svg"
      lightLogo="/img/logos/letterboxd.svg"
    >
      <Dashboard.Title>{film.name}</Dashboard.Title>

      <Dashboard.Details>{film.year}</Dashboard.Details>
    </Dashboard.Card>
  );
}
