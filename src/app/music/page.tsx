import routes from '~/app/config/routes';
import SpotifyContent from './spotify';
import { Page } from '~/components/Layouts/Page';
import { SocialUrls } from '~/app/social/Social.data';

export const { metadata } = routes.music;

export default async function MusicPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Music</Page.Title>
        <p>
          A glimpse into my taste in music. Data provided by{' '}
          <a href={SocialUrls.spotify} target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
          .
        </p>
      </Page.Header>
      <SpotifyContent />
    </div>
  );
}
