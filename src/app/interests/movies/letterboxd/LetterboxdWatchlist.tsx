import { Anchor, Group } from '@mantine/core';
import Link from 'next/link';
import { Section } from '~/components/common';
import { watchlist } from './letterboxd.data';
import LetterboxdList from './LetterboxdList';

const LETTERBOXD_WATCHLIST_URL = 'https://letterboxd.com/adamjnavarro/watchlist/';

export default function LetterboxdWatchlist() {
  return (
    <Section.Container>
      <Section.Header>
        <Group justify="space-between">
          <Section.Title>Want to Watch</Section.Title>
          <Anchor component={Link} href={LETTERBOXD_WATCHLIST_URL} target="_blank">
            View All
          </Anchor>
        </Group>
      </Section.Header>
      <Section.Content>
        <LetterboxdList data={watchlist} />
      </Section.Content>
    </Section.Container>
  );
}
