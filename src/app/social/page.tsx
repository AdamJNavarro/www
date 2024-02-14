import { Page } from '~/components/common';
import routes from '../config/routes';
import SocialShowcase from './SocialShowcase';

export const { metadata } = routes.social;

export default async function SocialPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Social Presence</Page.Title>
          <Page.Description>
            Here are the places you can find me online.
          </Page.Description>
        </Page.Header>
        <SocialShowcase />
      </Page.Content>
    </Page.Container>
  );
}
