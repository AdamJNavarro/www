import { SimpleGrid } from '@mantine/core';
import { StatCard } from '~/components/common/Stats';
import { charityGameStats } from './CharityGame.data';

export default function CharityStats() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {charityGameStats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </SimpleGrid>
  );
}
