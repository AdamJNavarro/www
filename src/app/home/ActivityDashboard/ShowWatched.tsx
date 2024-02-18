import { lastShowWatched } from '~/app/data/trakt';
import Dashboard from './Dashboard';

export default function ShowWatched() {
  const show = lastShowWatched;

  return (
    <Dashboard.Card label="Show Watched" href={show.url} logo="/img/logos/trakt.svg">
      <Dashboard.Title lineClamp={1}>{show.title}</Dashboard.Title>
      <Dashboard.Details lineClamp={1}>{show.year}</Dashboard.Details>
    </Dashboard.Card>
  );
}
