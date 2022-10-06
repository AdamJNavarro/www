import { SimpleGrid, Skeleton } from '@mantine/core';
import { Hourglass, Movie, Video } from 'tabler-icons-react';
import { Stat, StatCard } from '~/components/common/Stats';
import { useTraktStats } from '~/lib/trakt';

export default function TraktStats() {
  const { error, data } = useTraktStats();

  const stats: Stat[] = [
    {
      icon: Movie,
      label: 'Shows',
      value: data.shows,
    },
    {
      icon: Video,
      label: 'Episodes',
      value: data.episodes,
    },
    {
      icon: Hourglass,
      label: 'Hours',
      value: Math.floor(data.minutes / 60),
    },
  ];

  if (error) return null;

  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      {stats.map((stat) => (
        <Skeleton key={stat.label} visible={data.shows === 0} radius="md">
          <StatCard {...stat} />
        </Skeleton>
      ))}
    </SimpleGrid>
  );
}
