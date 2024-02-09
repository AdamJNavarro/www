import { useGithubStarredRepos } from '~/lib/github';
import Dashboard from './Dashboard';

export default function StarredRepo() {
  const { data, isLoading } = useGithubStarredRepos();

  if (isLoading || !data) return <Dashboard.Loading />;

  return (
    <Dashboard.Card
      label="Repo Starred"
      href={data.href}
      logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    >
      <Dashboard.Title lineClamp={1}>{data.name}</Dashboard.Title>
      <Dashboard.Details lineClamp={1}>{data.description}</Dashboard.Details>
    </Dashboard.Card>
  );
}
