import { Anchor, Group, SimpleGrid } from '@mantine/core';
import { IconChairDirector, IconHourglass, IconMovie } from '@tabler/icons-react';
import Link from 'next/link';
import { Section } from '~/components/common';
import { Stat, StatCard } from '~/components/common/Stats';

const letterboxdStats: Stat[] = [
  {
    icon: IconMovie,
    label: 'Films',
    value: 1521,
  },
  {
    icon: IconHourglass,
    label: 'Hours',
    value: 2854,
  },
  {
    icon: IconChairDirector,
    label: 'Directors',
    value: 832,
  },
];

const LETTERBOXD_STATS_URL = 'https://letterboxd.com/adamjnavarro/stats/';

export default function LetterboxdStats() {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Header>
          <Group justify="space-between">
            <Section.Title>Lifetime Stats</Section.Title>
            <Anchor component={Link} href={LETTERBOXD_STATS_URL} target="_blank">
              View Breakdown
            </Anchor>
          </Group>
        </Section.Header>
      </Section.Header>
      <Section.Content>
        <SimpleGrid cols={{ base: 1, sm: 3 }}>
          {letterboxdStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </SimpleGrid>
      </Section.Content>
    </Section.Container>
  );
}
