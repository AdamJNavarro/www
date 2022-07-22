import YouTube, { YouTubeProps } from 'react-youtube';

interface YoutubeVideo {
  videoId: string;
  config: YouTubeProps['opts'];
}

const DEFAULT_PLAYER_VARS = {
  autoplay: 0,
  fs: 0,
  controls: 0,
};

export default function YoutubeVideo({ videoId, config }: YoutubeVideo) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    playerVars: {
      ...config,
      ...DEFAULT_PLAYER_VARS,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
}
