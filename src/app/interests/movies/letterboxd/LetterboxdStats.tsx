import { SimpleGrid } from '@mantine/core';
import { IconChairDirector, IconHourglass, IconMovie } from '@tabler/icons-react';
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

export default function LetterboxdStats() {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Lifetime Stats</Section.Title>
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
