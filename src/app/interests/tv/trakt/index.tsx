import { Anchor, Group } from '@mantine/core';
import Link from 'next/link';
import { Suspense } from 'react';
import { Section } from '~/components/common';
import TraktStats from './TraktStats';
import TraktList from './TraktList';
import { getTraktListItems, getTraktStats } from '~/app/data/trakt';
import { LoadingSpinner } from '~/components/common/pure-html';

const TRAKT_STATS_URL = 'https://trakt.tv/users/adamjnavarro/year/all';

const TRAKT_FULL_WATCHLIST_URL =
  'https://trakt.tv/users/adamjnavarro/watchlist?sort=popularity,asc';

async function TraktData() {
  const statsData = getTraktStats();
  const watchingData = getTraktListItems({ listId: 'watching' });
  const watchedData = getTraktListItems({ listId: 'watched' });
  const watchlistData = getTraktListItems({ listId: 'watchlist', limit: 4 });
  const favoritesData = getTraktListItems({ listId: 'favorites' });

  const [stats, watching, watched, watchlist, favorites] = await Promise.all([
    statsData,
    watchingData,
    watchedData,
    watchlistData,
    favoritesData,
  ]);

  return (
    <>
      <Section.Container>
        <Section.Header>
          <Group justify="space-between">
            <Section.Title>Lifetime Stats</Section.Title>
            <Anchor component={Link} href={TRAKT_STATS_URL} target="_blank">
              View Breakdown
            </Anchor>
          </Group>
        </Section.Header>
        <Section.Content>
          <TraktStats data={stats} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Currently Watching</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList data={watching} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Recently Watched</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList data={watched.slice(0, 6)} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Header>
            <Group justify="space-between">
              <Section.Title>Want to Watch</Section.Title>
              <Anchor
                component={Link}
                href={TRAKT_FULL_WATCHLIST_URL}
                target="_blank"
              >
                View All
              </Anchor>
            </Group>
          </Section.Header>
        </Section.Header>
        <Section.Content>
          <TraktList data={watchlist} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>My Favorites</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList data={favorites} />
        </Section.Content>
      </Section.Container>
    </>
  );
}

export default function Trakt() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TraktData />
    </Suspense>
  );
}
