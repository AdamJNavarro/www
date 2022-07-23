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
import { useEffect, useState } from 'react';
import { TraktStat, TraktStatTotals } from './Trakt.types';
import { traktFetch, traktUrls } from './Trakt.utils';

async function getTraktStats(access_token: string): Promise<TraktStatTotals> {
  const { episodes, shows } = await traktFetch(traktUrls.stats, access_token);

  return {
    shows: shows.watched,
    episodes: episodes.watched,
    hours: Math.floor(episodes.minutes / 60),
  };
}

export default function LifetimeStats({ accessToken }: { accessToken: string }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [totals, setTotals] = useState<TraktStatTotals>({
    shows: 0,
    episodes: 0,
    hours: 0,
  });

  const stats: TraktStat[] = [
    {
      icon: Movie,
      label: 'Shows',
      value: totals.shows,
    },
    {
      icon: Video,
      label: 'Episodes',
      value: totals.episodes,
    },
    {
      icon: Hourglass,
      label: 'Hours',
      value: totals.hours,
    },
  ];

  const getData = async () => {
    try {
      setTotals(await getTraktStats(accessToken));
      setLoading(false);
    } catch (e) {
      setError('An error occurred getting data from Spotify.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
