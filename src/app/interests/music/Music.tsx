'use client';

import { useRef } from 'react';
import { Anchor } from '@mantine/core';
import Link from 'next/link';
import { Page } from '~/components/common';
import Spotify from './spotify';
import { SocialUrls } from '~/app/social/Social.data';

export default function Music() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Music</Page.Title>
          <Page.Description>
            A glimpse into my taste in music. Data provided by{' '}
            <Anchor component={Link} href={SocialUrls.spotify} target="_blank">
              Spotify
            </Anchor>
            .
          </Page.Description>
        </Page.Header>
        <Spotify />
      </Page.Content>
    </Page.Container>
  );
}
