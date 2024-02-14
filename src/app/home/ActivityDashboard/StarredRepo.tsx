import Dashboard from './Dashboard';

export default function StarredRepo({ data }) {
  return (
    <Dashboard.Card
      label="Repo Starred"
      href={data.href}
      logo="/img/logos/github.svg"
    >
      <Dashboard.Title lineClamp={1}>{data.name}</Dashboard.Title>
      <Dashboard.Details lineClamp={1}>{data.description}</Dashboard.Details>
    </Dashboard.Card>
  );
}
