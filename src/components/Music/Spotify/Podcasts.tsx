import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { useSpotifyPodcastsFetch } from './Spotify.utils';

export default function FavoritePodcasts({ access_token }: any) {
  const {
    loading,
    error,
    data = [],
  } = useSpotifyPodcastsFetch({
    opts: {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  });

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
