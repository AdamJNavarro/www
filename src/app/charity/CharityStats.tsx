import { SimpleGrid } from '@mantine/core';
import { StatCard } from '~/components/common/Stats';
import { charityGameStats } from './CharityGame.data';

export default function CharityStats() {
  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      {charityGameStats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </SimpleGrid>
  );
}
