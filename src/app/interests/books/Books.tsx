'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import Literal from './Literal';

export default function Books() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Books</Page.Title>
          <Page.Description>A peek into my literary tastes.</Page.Description>
        </Page.Header>
        <Literal />
      </Page.Content>
    </Page.Container>
  );
}
