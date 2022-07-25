import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { SPOTIFY_NUM_OF_TRACKS, useSpotifyTracksFetch } from './Spotify.utils';

export default function RecentlyLikedTracks({ access_token }: any) {
  const {
    loading,
    error,
    data = [],
  } = useSpotifyTracksFetch({
    opts: {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
    vars: {
      num: 8,
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
