'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import TitleBar from '~/components/Navigation/TitleBar';
import Literal from './Literal';

export default function Books() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar title="Books" titleRef={titleRef} magicTitle scrollRef={scrollRef} />
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
