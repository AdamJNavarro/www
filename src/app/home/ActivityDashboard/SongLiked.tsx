import Dashboard from './Dashboard';

export default function SongLiked({ data }) {
  return (
    <Dashboard.Card label="Song Liked" href={data.url} logo="/img/logos/spotify.svg">
      <Dashboard.Title lineClamp={1}>{data.name}</Dashboard.Title>
      <Dashboard.Details lineClamp={1}>{data.artist}</Dashboard.Details>
    </Dashboard.Card>
  );
}
