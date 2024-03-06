import Dashboard from './Dashboard';

export default function StarredRepo({ data }) {
  return (
    <Dashboard.Card
      label="Repo Starred"
      href={data.href}
      logo="/img/logos/github.svg"
    >
      <Dashboard.Title>{data.name}</Dashboard.Title>
      <Dashboard.Details>{data.description}</Dashboard.Details>
    </Dashboard.Card>
  );
}
