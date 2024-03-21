import routes from '~/app/config/routes';

import { SocialUrls } from '~/app/social/Social.data';
import Trakt from './trakt';
import { Page } from '~/components/Layouts/Page';

export const { metadata } = routes.tv;

export default async function TvPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Television</Page.Title>
        <p>
          An inside look into my TV consumption. Data provided by{' '}
          <a href={SocialUrls.trakt} target="_blank" rel="noopener noreferrer">
            Trakt
          </a>
          .
        </p>
      </Page.Header>
      <Trakt />
    </div>
  );
}
