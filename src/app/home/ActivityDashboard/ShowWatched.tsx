import Dashboard from './Dashboard';

export default function ShowWatched({ data }) {
  return (
    <Dashboard.Card
      label="Show Watched"
      href={data.traktUrl}
      logo="/img/logos/trakt.svg"
    >
      <Dashboard.Title lineClamp={1}>{data.title}</Dashboard.Title>
      <Dashboard.Details lineClamp={1}>{data.year}</Dashboard.Details>
    </Dashboard.Card>
  );
}
