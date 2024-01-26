import { SimpleGrid } from '@mantine/core';
import classes from './DancingPerformance.module.css';

interface YoutubeEmbedProps {
  videoId: string;
  config: any;
}

const performanceVideos = [
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

function buildYoutubeURL(videoId, config) {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&start=${config.start}&end=${config.end}`;
}

function YoutubeEmbed({ videoId, config }: YoutubeEmbedProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
        <iframe
          className={classes.iframe}
          src={buildYoutubeURL(videoId, config)}
          title="Youtube Dance Performance Video"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}

export default function DancingPerformances() {
  return (
    <SimpleGrid cols={1} spacing="xl">
      {performanceVideos.map((video) => (
        <YoutubeEmbed key={video.videoId} {...video} />
      ))}
    </SimpleGrid>
  );
}
