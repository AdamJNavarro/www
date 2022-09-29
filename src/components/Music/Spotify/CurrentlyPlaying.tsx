import { createStyles, Group, MediaQuery, Text } from '@mantine/core';
import { BrandSpotify } from 'tabler-icons-react';
import { useSpotifyCurrentlyPlaying } from './Spotify.utils';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 24,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 18,
    },
  },
}));

export default function CurrentlyPlaying() {
  const { classes } = useStyles();
  const {
    loading,
    error,
    data = { isActive: false, playingItem: null },
  } = useSpotifyCurrentlyPlaying({});

  if (loading) return null;

  if (error) return null;

  return (
    <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
      <Group noWrap>
        <Group spacing="xs" noWrap>
          <BrandSpotify size={36} color="#1ED760" />
          <Text weight={500} className={classes.title}>
            {data.isActive ? 'Now Playing - ' : 'Not playing currently.'}
          </Text>
          {data.playingItem && (
            <Text className={classes.title} color="dimmed" lineClamp={1}>
              {data.playingItem.title}
            </Text>
          )}
        </Group>
      </Group>
    </MediaQuery>
  );
}
