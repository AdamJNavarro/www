import Link from 'next/link';
import { Anchor } from '@mantine/core';
import routes from '~/app/config/routes';
import { Page } from '~/components/common';
import { SocialUrls } from '~/app/social/Social.data';

import Literal from './Literal';

export const { metadata } = routes.books;

export default async function BooksPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Books</Page.Title>
          <Page.Description>
            A peek into my literary tastes. Data provided by{' '}
            <Anchor component={Link} href={SocialUrls.literal} target="_blank">
              Literal
            </Anchor>
            .
          </Page.Description>
        </Page.Header>
        <Literal />
      </Page.Content>
    </Page.Container>
  );
}
