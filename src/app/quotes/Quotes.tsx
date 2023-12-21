'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import TitleBar from '~/components/Navigation/TitleBar';
import QuotesList from './QuotesList';

export default function Quotes() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar
        title="Quotes"
        titleRef={titleRef}
        magicTitle
        scrollRef={scrollRef}
      />
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Quotes</Page.Title>
          <Page.Description>
            A collection of my favorite words of wisdom.
          </Page.Description>
        </Page.Header>
        <QuotesList />
      </Page.Content>
    </Page.Container>
  );
}
