'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import Trakt from './trakt';

export default function Television() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Television</Page.Title>
          <Page.Description>An inside look into my TV consumption.</Page.Description>
        </Page.Header>
        <Trakt />
      </Page.Content>
    </Page.Container>
  );
}
