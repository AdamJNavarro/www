import { Anchor } from '@mantine/core';
import Link from 'next/link';
import routes from '~/app/config/routes';
import { SocialUrls } from '~/app/social/Social.data';
import { Page } from '~/components/common';
import SpotifyContent from './spotify';

export const { metadata } = routes.music;

export default async function MusicPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Music</Page.Title>
          <Page.Description>
            A glimpse into my taste in music. Data provided by{' '}
            <Anchor component={Link} href={SocialUrls.spotify} target="_blank">
              Spotify
            </Anchor>
            .
          </Page.Description>
        </Page.Header>
        <SpotifyContent />
      </Page.Content>
    </Page.Container>
  );
}
