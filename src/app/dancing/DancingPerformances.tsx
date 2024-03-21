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
          className="absolute top-0 left-0 w-full h-full border-0 rounded-sm"
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
    <div className="flex flex-col space-y-12">
      {performanceVideos.map((video) => (
        <YoutubeEmbed key={video.videoId} {...video} />
      ))}
    </div>
  );
}
