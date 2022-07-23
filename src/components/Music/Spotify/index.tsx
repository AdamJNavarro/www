import { Loader, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Section } from '~/components/common';
import FavoriteArtists from './Artists';
import { getSpotifyAccessToken } from './Spotify.utils';
import FavoritePodcasts from './Podcasts';
import RecentlyLikedTracks from './Tracks';

function ContentLoading() {
  return (
    <div
      style={{
        display: 'flex',
        height: '33vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Loader size="md" />
    </div>
  );
}

export default function SpotifyContent() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string>('');

  const getToken = async () => {
    try {
      const data = await getSpotifyAccessToken();
      if (data.access_token) {
        setToken(data.access_token);
        setLoading(false);
      } else {
        throw data.error;
      }
    } catch (e) {
      //console.log('SPOT TOKEN ERR', e);
      setError('An error occurred getting data from Spotify.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  if (loading) return <ContentLoading />;

  if (error) return <Title>Spotify Error</Title>;

  return (
    <>
      <Section.Container>
        <Section.Header>
          <Section.Title>Recently Liked Tracks</Section.Title>
        </Section.Header>
        <Section.Content>
          <RecentlyLikedTracks access_token={token} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Favorite Artists</Section.Title>
        </Section.Header>
        <Section.Content>
          <FavoriteArtists access_token={token} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Favorite Podcasts</Section.Title>
        </Section.Header>
        <Section.Content>
          <FavoritePodcasts access_token={token} />
        </Section.Content>
      </Section.Container>
    </>
  );
}
