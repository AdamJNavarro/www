import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getSpotifyCurrentlyPlaying } from './Spotify.utils';

export default function CurrentlyPlaying({ access_token }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playingItem, setPlayingItem] = useState(null);

  const getData = async () => {
    try {
      const res = await getSpotifyCurrentlyPlaying(access_token);
      if (res.error) throw res.error;
      if (res.data) {
        const { currently_playing_type, item } = res.data;
        setIsPlaying(true);
        if (currently_playing_type === 'track') {
          const { artists, album, name, external_urls } = item;
          setPlayingItem({
            label: name,
            subLabel: artists.map((_artist: any) => _artist.name).join(', '),
            image: album.images[0].url,
            href: external_urls.spotify,
          });
        } else {
          setPlayingItem(item);
        }
      }
    } catch (e) {
      setError('An error occurred getting data from Spotify.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return null;

  if (error) return <Title>ERROR</Title>;

  return <Title>Currently Playing:</Title>;
}
