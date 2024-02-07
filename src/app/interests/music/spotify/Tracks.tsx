import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { useSpotifyTracks } from '~/lib/spotify';

const SPOTIFY_NUM_OF_TRACKS = 6;

export default function RecentlyLikedTracks() {
  const { data, error } = useSpotifyTracks({ limit: SPOTIFY_NUM_OF_TRACKS });
  return (
    <SpotifyGrid
      loading={!data?.tracks.length}
      error={error}
      placeholderCount={SPOTIFY_NUM_OF_TRACKS}
    >
      {/* @ts-ignore */}
      {data.tracks.map((track) => {
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
