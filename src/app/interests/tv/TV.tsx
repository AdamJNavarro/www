'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { Anchor } from '@mantine/core';
import { Page } from '~/components/common';
import Trakt from './trakt';
import { SocialUrls } from '~/app/social/Social.data';

export default function Television() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Television</Page.Title>
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
