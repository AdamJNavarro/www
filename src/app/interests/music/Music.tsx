'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import Spotify from './spotify';

export default function Music() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Music</Page.Title>
          <Page.Description>A glimpse into my taste in music.</Page.Description>
        </Page.Header>
        <Spotify />
      </Page.Content>
    </Page.Container>
  );
}
