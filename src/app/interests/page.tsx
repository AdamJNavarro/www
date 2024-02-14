import { Page } from '~/components/common';
import routes from '../config/routes';
import InterestsGrid from './InterestsGrid';

export const { metadata } = routes.interests;

export default async function InterestsPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Interests</Page.Title>
          <Page.Description>Learn more about what I enjoy.</Page.Description>
        </Page.Header>
        <InterestsGrid />
      </Page.Content>
    </Page.Container>
  );
}
