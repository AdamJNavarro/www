import {
  RingProgress,
  Text,
  SimpleGrid,
  Paper,
  Center,
  Group,
  Skeleton,
} from '@mantine/core';
import { Hourglass, Movie, Video } from 'tabler-icons-react';
import { TraktStat } from './Trakt.types';
import { useTraktStatsFetch } from './Trakt.utils';

export default function LifetimeStats({ accessToken }: { accessToken: string }) {
  const {
    loading,
    error,
    data = {
      shows: 0,
      episodes: 0,
      minutes: 0,
    },
  } = useTraktStatsFetch({
    opts: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });

  const stats: TraktStat[] = [
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
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Skeleton visible={loading}>
            <Paper withBorder radius="md" p="xs" key={stat.label}>
              <Group>
                <RingProgress
                  size={80}
                  roundCaps
                  thickness={6}
                  sections={[{ value: 100, color: 'purple' }]}
                  label={
                    <Center>
                      <Icon size={22} />
                    </Center>
                  }
                />

                <div>
                  <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
                    {stat.label}
                  </Text>
                  <Text weight={700} size="xl">
                    {stat.value}
                  </Text>
                </div>
              </Group>
            </Paper>
          </Skeleton>
        );
      })}
    </SimpleGrid>
  );
}
