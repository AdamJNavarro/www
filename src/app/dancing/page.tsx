import routes from '~/app/config/routes';
import { Page } from '~/components/Layouts/Page';

export const { metadata } = routes.dancing;

export default async function DancingPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Dancing</Page.Title>
        <p>If there is a dance floor, you will find me on it.</p>
      </Page.Header>
      <div className="mb-24">
        <YoutubeEmbed videoId="yAk2TURgYew" config={{ start: 24, end: 76 }} />
      </div>
      <div className="mb-24">
        <YoutubeEmbed videoId="oEpV40r7ho8" config={{ start: 210, end: 279 }} />
      </div>
    </div>
  );
}

function buildYoutubeURL(videoId, config) {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&start=${config.start}&end=${config.end}`;
}

function YoutubeEmbed({ videoId, config }: any) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src={buildYoutubeURL(videoId, config)}
          title="Youtube Dance Performance Video"
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
