import { SimpleGrid } from '@mantine/core';
import { YoutubeVideo } from '../common/Media';

const youtubeVideos = [
  {
    videoId: 'yAk2TURgYew',
    config: {
      start: 24,
      end: 76,
    },
  },
  {
    videoId: 'oEpV40r7ho8',
    config: {
      start: 210,
      end: 279,
    },
  },
];

export default function DancingPerformances() {
  return (
    <SimpleGrid cols={1}>
      {youtubeVideos.map((video) => (
        <YoutubeVideo {...video} />
      ))}
    </SimpleGrid>
  );
}
