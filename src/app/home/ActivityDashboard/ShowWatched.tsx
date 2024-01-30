import Dashboard from './Dashboard';
import { useTraktList } from '~/lib/trakt';

export default function ShowWatched() {
  const { data, error } = useTraktList({ listId: 'watched', limit: 1 });

  if (!data) return null;

  return (
    <Dashboard.Card
      label="Show Watched"
      href={data.shows.length === 0 ? '/' : `${data.shows[0].traktUrl}`}
      loading={data.shows.length === 0}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1660509695/logos/trakt.png"
    >
      <Dashboard.Title lineClamp={1}>
        {data.shows.length === 0 ? 'Now' : `${data.shows[0].title}`}
      </Dashboard.Title>
      <Dashboard.Details lineClamp={1}>
        {data.shows.length === 0 ? 'Loading...' : `${data.shows[0].year}`}
      </Dashboard.Details>
    </Dashboard.Card>
  );
}
