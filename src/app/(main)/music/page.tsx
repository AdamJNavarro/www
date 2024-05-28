import routes from '~/app/(main)/config/routes';
import SpotifyContent from './spotify';
import { Page } from '~/components/Layouts/Page';
import { DataAttribution } from '~/components/common/Attribution';

export const { metadata } = routes.music;

export default async function MusicPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Music</Page.Title>
        <Page.Description>A glimpse into my taste in music.</Page.Description>
      </Page.Header>
      <SpotifyContent />
      <div className="mt-24">
        <DataAttribution sources={['spotify']} />
      </div>
    </div>
  );
}