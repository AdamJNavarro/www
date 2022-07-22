import { useRef } from 'react';
import { Page } from '../common';
import TitleBar from '../Navigation/TitleBar';
import WordsDisclaimer from './WordsDisclaimer';
import WordsList from './WordsList';

export default function Words() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar title="Words" titleRef={titleRef} magicTitle scrollRef={scrollRef} />
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Words</Page.Title>
          <Page.Description>
            An ever-growing list of words I encountered and did not know.
          </Page.Description>
        </Page.Header>
        <WordsDisclaimer />
        <WordsList />
      </Page.Content>
    </Page.Container>
  );
}
