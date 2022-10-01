import { useSpotifyTracksFetch } from '~/components/Music/Spotify/Spotify.utils';
import Dashboard from './Dashboard';

export default function SongLiked() {
  const {
    loading,
    error,
    data = [],
  } = useSpotifyTracksFetch({
    vars: {
      num: 1,
    },
  });

  return (
    <Dashboard.Card
      label="Song Liked"
      href={data.length === 0 ? '/' : `${data[0].url}`}
      loading={loading}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1660509695/logos/spotify.png"
    >
      <Dashboard.Title>
        {data.length === 0 ? 'Now' : `${data[0].name}`}
      </Dashboard.Title>
      <Dashboard.Details>
        {data.length === 0 ? 'Loading...' : `${data[0].artist}`}
      </Dashboard.Details>
    </Dashboard.Card>
  );
}
