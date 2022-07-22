import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Section } from '~/components/common';
import { getTmdbImageConfig } from '../Tmdb/helpers';
import { traktUrls } from './helpers';
import LifetimeStats from './LifetimeStats';
import TraktList from './TraktList';

const TRAKT_ACCESS_TOKEN = process.env.NEXT_PUBLIC_TRAKT_ACCESS_TOKEN;

export default function TraktContent() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [posterConfig, setPosterConfig] = useState<any>(null);

  const getToken = async () => {
    try {
      /* const data = await getAccessToken();
      if (data.access_token) {
        setToken(data.access_token);
        setLoading(false);
      } else {
        throw data.error;
      } */

      setToken(TRAKT_ACCESS_TOKEN);
      setPosterConfig(getTmdbImageConfig());
      setLoading(false);
    } catch (e) {
      //console.log('SPOT TOKEN ERR', e);
      setError('An error occurred getting data from Spotify.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  if (error) return <Title>Trakt Error</Title>;

  if (loading) return <Title>Trakt Loading</Title>;

  return (
    <>
      <Section.Container>
        <Section.Header>
          <Section.Title>Lifetime Stats</Section.Title>
        </Section.Header>
        <Section.Content>
          <LifetimeStats accessToken={token} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Currently Watching</Section.Title>
          <Section.Description>
            I try and only watch two series at a time. Typically one live-action and
            the other anime.
          </Section.Description>
        </Section.Header>
        <Section.Content>
          <TraktList
            accessToken={token}
            posterConfig={posterConfig}
            placeholderCount={2}
            url={traktUrls.currentlyWatching}
          />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Recently Watched</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList
            accessToken={token}
            posterConfig={posterConfig}
            placeholderCount={3}
            url={traktUrls.recentlyWatched}
            itemLimit={3}
          />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>My Favorites</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList
            accessToken={token}
            posterConfig={posterConfig}
            placeholderCount={3}
            url={traktUrls.favorites}
          />
        </Section.Content>
      </Section.Container>
    </>
  );
}
