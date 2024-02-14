import { SimpleGrid, Skeleton } from '@mantine/core';
import { IconHourglass, IconMovie, IconVideo } from '@tabler/icons-react';
import { Stat, StatCard } from '~/components/common/Stats';

export default function TraktStats({ data }) {
  const stats: Stat[] = [
    {
      icon: IconMovie,
      label: 'Shows',
      value: data.shows,
    },
    {
      icon: IconVideo,
      label: 'Episodes',
      value: data.episodes,
    },
    {
      icon: IconHourglass,
      label: 'Hours',
      value: Math.floor(data.minutes / 60),
    },
  ];

  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {stats.map((stat) => (
        <Skeleton key={stat.label} visible={data.shows === 0} radius="md">
          <StatCard {...stat} />
        </Skeleton>
      ))}
    </SimpleGrid>
  );
}
