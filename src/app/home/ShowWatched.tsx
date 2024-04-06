import { lastShowWatched } from '~/app/data/trakt';
import Dashboard from './Dashboard';

export default function ShowWatched() {
  const show = lastShowWatched;

  return (
    <Dashboard.Card
      label="Show Watched"
      href={show.url}
      darkLogo="/img/logos/trakt.svg"
      lightLogo="/img/logos/trakt.svg"
    >
      <Dashboard.Title>{show.title}</Dashboard.Title>
      <Dashboard.Details>{show.year}</Dashboard.Details>
    </Dashboard.Card>
  );
}
