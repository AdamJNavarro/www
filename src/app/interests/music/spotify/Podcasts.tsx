import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { useSpotifyPodcasts } from '~/lib/spotify';

export default function FavoritePodcasts() {
  const { data, error } = useSpotifyPodcasts();

  return (
    <SpotifyGrid loading={!data?.podcasts.length} error={error} placeholderCount={4}>
      {/* @ts-ignore */}
      {data.podcasts.map((podcast) => {
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
