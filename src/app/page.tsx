import { Page } from '~/components/common';

export default async function HomePage() {
  return (
    <Page.Container data-cy="home-page">
      <Page.Content>
        <Page.Header>
          <Page.Title>Page Title</Page.Title>
          <Page.Description>Page Description goes here.</Page.Description>
        </Page.Header>
      </Page.Content>
    </Page.Container>
  );
}
