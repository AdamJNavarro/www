import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { useSpotifyPodcastsFetch } from './Spotify.utils';

export default function FavoritePodcasts() {
  const { loading, error, data = [] } = useSpotifyPodcastsFetch({});

  return (
    <SpotifyGrid loading={loading} error={error} placeholderCount={4}>
      {data.map((podcast) => {
        const { id, image, name, url, publisher } = podcast;
        return (
          <SpotifyItem
            key={id}
            image={image}
            label={name}
            subLabel={publisher}
            url={url}
          />
        );
      })}
    </SpotifyGrid>
  );
}
