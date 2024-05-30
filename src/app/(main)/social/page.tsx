import { Page } from '~/components/Layouts/Page';
import routes from '../config/routes';

import SocialStack from './SocialStack';

export const { metadata } = routes.social;

export default async function SocialPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Social Presence</Page.Title>
        <Page.Description>
          Here are the places you can find me online.
        </Page.Description>
      </Page.Header>
      <div className="mt-8 mb-24">
        <SocialStack />
      </div>
    </div>
  );
}
