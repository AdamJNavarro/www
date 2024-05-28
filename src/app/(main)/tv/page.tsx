import routes from '~/app/(main)/config/routes';

import Trakt from './trakt';
import { Page } from '~/components/Layouts/Page';
import { DataAttribution } from '~/components/common/Attribution';

export const { metadata } = routes.tv;

export default async function TvPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Television</Page.Title>
        <Page.Description>
          An inside look into my TV consumption, activity and preferences.
        </Page.Description>
      </Page.Header>
      <Trakt />
      <div className="mt-24">
        <DataAttribution sources={['trakt']} />
      </div>
    </div>
  );
}