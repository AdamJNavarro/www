import { Anchor, Group } from '@mantine/core';
import Link from 'next/link';
import { Section } from '~/components/common';
import TraktStats from './TraktStats';
import TraktList from './TraktList';

const TRAKT_STATS_URL = 'https://trakt.tv/users/adamjnavarro/year/all';

const TRAKT_FULL_WATCHLIST_URL =
  'https://trakt.tv/users/adamjnavarro/watchlist?sort=popularity,asc';

export default function TraktContent() {
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
          <TraktStats />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Currently Watching</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList placeholderCount={4} listId="currently-watching" />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Recently Watched</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList placeholderCount={4} listId="watched" itemLimit={4} />
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
          <TraktList placeholderCount={4} listId="watchlist" itemLimit={4} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>My Favorites</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList placeholderCount={5} listId="favorites" />
        </Section.Content>
      </Section.Container>
    </>
  );
}
