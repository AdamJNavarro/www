import { useSpotifyTracks } from '~/lib/spotify';
import Dashboard from './Dashboard';

export default function SongLiked() {
  const { data, isLoading } = useSpotifyTracks({ limit: 1 });

  if (isLoading || !data) return <Dashboard.Loading />;

  return (
    <Dashboard.Card
      label="Song Liked"
      href={data.tracks[0].url}
      logo="/img/logos/spotify.svg"
    >
      <Dashboard.Title lineClamp={1}>{data.tracks[0].name}</Dashboard.Title>
      <Dashboard.Details lineClamp={1}>{data.tracks[0].artist}</Dashboard.Details>
    </Dashboard.Card>
  );
}
