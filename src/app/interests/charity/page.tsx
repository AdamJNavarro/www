import routes from '~/app/config/routes';
import { Page } from '~/components/common';
import CharityGame from './CharityGame';

export const { metadata } = routes.charity;

export default async function CharityPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Charity Game</Page.Title>
          <Page.Description>
            A music-based trivia competition I run on Instagram that began in
            February of 2021.
          </Page.Description>
        </Page.Header>
        <CharityGame />
      </Page.Content>
    </Page.Container>
  );
}
