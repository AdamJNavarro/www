import { useEffect, useState } from 'react';
import { SpotifyTrack } from './Spotify.types';
import SpotifyGrid from './SpotifyGrid';
import SpotifyItem from './SpotifyItem';
import { getLastLikedTracks, SPOTIFY_NUM_OF_TRACKS } from './helpers';

export default function RecentlyLikedTracks({ access_token }: any) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);

  const getData = async () => {
    try {
      //throw new Error('TESTING ERROR');
      setTracks(await getLastLikedTracks(access_token));
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
    <SpotifyGrid
      loading={loading}
      error={error}
      placeholderCount={SPOTIFY_NUM_OF_TRACKS}
    >
      {tracks.map((track) => {
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
