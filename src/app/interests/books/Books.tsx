'use client';

import { useRef } from 'react';
import { Anchor } from '@mantine/core';
import Link from 'next/link';
import { Page } from '~/components/common';
import Literal from './Literal';
import { SocialUrls } from '~/app/social/Social.data';

export default function Books() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Books</Page.Title>
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