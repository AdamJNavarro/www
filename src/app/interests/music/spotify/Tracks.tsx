import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';

const SPOTIFY_NUM_OF_TRACKS = 6;

export default function RecentlyLikedTracks({ data }) {
  return (
    <SpotifyGrid
      loading={!data}
      error={undefined}
      placeholderCount={SPOTIFY_NUM_OF_TRACKS}
    >
      {/* @ts-ignore */}
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
