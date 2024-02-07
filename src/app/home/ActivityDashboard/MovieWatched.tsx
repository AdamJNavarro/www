import Dashboard from './Dashboard';
import { watched } from '~/app/interests/movies/letterboxd/letterboxd.data';

const film = watched[0];

export default function MovieWatched() {
  return (
    <Dashboard.Card
      label="Movie Watched"
      href={film.url}
      loading={false}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1664659090/logos/letterboxd.png"
    >
      <Dashboard.Title tt="capitalize">{film.name}</Dashboard.Title>

      <Dashboard.Details>{film.year}</Dashboard.Details>
    </Dashboard.Card>
  );
}
