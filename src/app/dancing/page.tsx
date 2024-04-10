import routes from '~/app/config/routes';
import { Page } from '~/components/Layouts/Page';

export const { metadata } = routes.dancing;

export default async function DancingPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Dancing</Page.Title>
        <Page.Description>
          If there is a dance floor, you will find me on it.
        </Page.Description>
      </Page.Header>
      <div className="prose mb-24">
        <p>
          It wasn’t until my college days that I realized just how much I enjoyed
          dancing. At first I would need a dose of the liquid courage to be
          comfortable enough to dance in public. Nowadays all that’s needed is some
          good music and a space to move. I’ve found that most of my friends really
          enjoy dancing but often need a little encouragement and guidance to let
          loose. If you are able to, I would highly recommend being the person to
          make dancing a more common and welcoming activity in your social circle. It
          almost always leads to everyone having a better time and connecting with
          others in a different way. Just be sure to respect when someone says they
          don’t want to and keep it a judgement-free zone.
        </p>
        <p>
          My favorite style of dance is without a doubt hip-hop. On occasion I will
          pop into a salsa, bachata or merengue class but hip-hop is where my heart
          truly is. Some of my favorite choreographers are{' '}
          <a
            href="https://www.juliandeguzman.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Julian Deguzman
          </a>
          ,{' '}
          <a
            href="https://www.instagram.com/jasper_sanchez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jasper Sanchez
          </a>{' '}
          and{' '}
          <a
            href="https://www.instagram.com/dvtboinvte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nate Ramos
          </a>
          .
        </p>
      </div>
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
