import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { useSpotifyTracksFetch } from './Spotify.utils';

const SPOTIFY_NUM_OF_TRACKS = 6;

export default function RecentlyLikedTracks() {
  const {
    loading,
    error,
    data = [],
  } = useSpotifyTracksFetch({
    vars: {
      num: SPOTIFY_NUM_OF_TRACKS,
    },
  });

  return (
    <SpotifyGrid
      loading={loading}
      error={error}
      placeholderCount={SPOTIFY_NUM_OF_TRACKS}
    >
      {data.map((track) => {
        const { artist, id, image, name, url } = track;
        return (
          <SpotifyItem
            key={id}
            image={image}
            label={name}
            subLabel={artist}
            url={url}
          />
        );
      })}
    </SpotifyGrid>
  );
}
