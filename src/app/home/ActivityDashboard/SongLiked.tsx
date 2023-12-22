import { useSpotifyTracks } from '~/lib/spotify';
import Dashboard from './Dashboard';

export default function SongLiked() {
  const { data, error } = useSpotifyTracks({ limit: 1 });

  if (!data) return null;

  return (
    <Dashboard.Card
      label="Song Liked"
      href={data.tracks.length === 0 ? '/' : `${data.tracks[0].url}`}
      loading={data.tracks.length === 0}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1660509695/logos/spotify.png"
    >
      <Dashboard.Title lineClamp={1}>
        {data.tracks.length === 0 ? 'Now' : `${data.tracks[0].name}`}
      </Dashboard.Title>
      <Dashboard.Details lineClamp={1}>
        {data.tracks.length === 0 ? 'Loading...' : `${data.tracks[0].artist}`}
      </Dashboard.Details>
    </Dashboard.Card>
  );
}
