import Dashboard from './Dashboard';
import { useTraktList } from '~/lib/trakt';

export default function ShowWatched() {
  const { data, isLoading } = useTraktList({ listId: 'watched', limit: 1 });

  if (isLoading || !data) return <Dashboard.Loading />;

  return (
    <Dashboard.Card
      label="Show Watched"
      href={data.shows[0].traktUrl}
      logo="/img/logos/trakt.svg"
    >
      <Dashboard.Title lineClamp={1}>{data.shows[0].title}</Dashboard.Title>
      <Dashboard.Details lineClamp={1}>{data.shows[0].year}</Dashboard.Details>
    </Dashboard.Card>
  );
}
