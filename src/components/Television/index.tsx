import { useRef } from 'react';
import { Page } from '../common';
import TitleBar from '../Navigation/TitleBar';
import TraktContent from './Trakt';

export default function Television() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar
        title="Television"
        titleRef={titleRef}
        magicTitle
        scrollRef={scrollRef}
      />
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Television</Page.Title>
          <Page.Description>An inside look into my TV consumption.</Page.Description>
        </Page.Header>
        <TraktContent />
      </Page.Content>
    </Page.Container>
  );
}
