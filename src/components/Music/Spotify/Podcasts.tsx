import { useEffect, useState } from 'react';
import { SpotifyPodcast } from './Spotify.types';
import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { getSpotifyPodcasts } from './Spotify.utils';

export default function FavoritePodcasts({ access_token }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [podcasts, setPodcasts] = useState<SpotifyPodcast[]>([]);

  const getData = async () => {
    try {
      setPodcasts(await getSpotifyPodcasts(access_token));
      setLoading(false);
    } catch (e) {
      setError('An error occurred getting data from Spotify.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SpotifyGrid loading={loading} error={error} placeholderCount={4}>
      {podcasts.map((podcast) => {
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
