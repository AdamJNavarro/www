import { Anchor } from '@mantine/core';
import Link from 'next/link';
import routes from '~/app/config/routes';
import { Page } from '~/components/common';
import { SocialUrls } from '~/app/social/Social.data';
import Trakt from './trakt';

export const { metadata } = routes.tv;

export default async function TvPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Television</Page.Title>
          <Page.Description>
            An inside look into my TV consumption. Data provided by{' '}
            <Anchor component={Link} href={SocialUrls.trakt} target="_blank">
              Trakt
            </Anchor>
            .
          </Page.Description>
        </Page.Header>
        <Trakt />
      </Page.Content>
    </Page.Container>
  );
}
