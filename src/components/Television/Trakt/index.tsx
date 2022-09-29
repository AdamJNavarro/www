import { Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Section } from '~/components/common';
import { getTmdbImageConfig } from '../Tmdb/Tmdb.utils';
import { traktUrls } from './Trakt.utils';
import TraktStats from './TraktStats';
import TraktList from './TraktList';

export default function TraktContent() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [posterConfig, setPosterConfig] = useState<any>(null);

  const getConfig = async () => {
    try {
      setPosterConfig(await getTmdbImageConfig());
    } catch (e) {
      setError('An error occurred getting Tmdb Config.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConfig();
  }, []);

  if (error) return <Title>TMDB Error</Title>;

  if (loading) return <Title>TMDB Loading</Title>;

  return (
    <>
      <Section.Container>
        <Section.Header>
          <Section.Title>Lifetime Stats</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktStats />
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
            posterConfig={posterConfig}
            placeholderCount={3}
            url={traktUrls.favorites}
          />
        </Section.Content>
      </Section.Container>
    </>
  );
}
