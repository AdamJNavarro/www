import { useSpotifyTracks } from '~/lib/spotify';
import Dashboard from './Dashboard';

export default function SongLiked() {
  const { data, error } = useSpotifyTracks({ limit: 1 });

  return (
    <Dashboard.Card
      label="Song Liked"
      href={!data ? '/' : '/'}
      loading={!data}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1660509695/logos/spotify.png"
    >
      <Dashboard.Title>{!data ? 'Now' : '/'}</Dashboard.Title>
      <Dashboard.Details>{!data ? 'Loading...' : '/'}</Dashboard.Details>
    </Dashboard.Card>
  );
}
