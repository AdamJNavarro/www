'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import WordsDisclaimer from './WordsDisclaimer';
import WordsList from './WordsList';
import { wordBank } from './Words.data';

export default function Words() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Words</Page.Title>
          <Page.Description>
            An ever-growing list of words I encountered and did not know. I began
            logging mid-2018 and the word bank currently contains{' '}
            {wordBank.length + 1} words.
          </Page.Description>
        </Page.Header>
        <WordsList />
      </Page.Content>
    </Page.Container>
  );
}
