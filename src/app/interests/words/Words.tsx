'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import WordsList from './WordsList';

export default function Words({ data }: any) {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Words</Page.Title>
          <Page.Description>
            An ever-growing list of words I encountered and did not know. I began
            logging mid-2018 and the word bank currently contains {data.length + 1}{' '}
            words.
          </Page.Description>
        </Page.Header>
        <WordsList data={data} />
      </Page.Content>
    </Page.Container>
  );
}
