import { useRef } from 'react';
import { Page } from '../common';
import TitleBar from '../Navigation/TitleBar';
import LiteralContent from './Literal';

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
        <LiteralContent />
      </Page.Content>
    </Page.Container>
  );
}
