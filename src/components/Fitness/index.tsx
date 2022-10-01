import { useRef } from 'react';
import { Page } from '../common';
import TitleBar from '../Navigation/TitleBar';

export default function Fitness() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar
        title="Fitness"
        titleRef={titleRef}
        magicTitle
        scrollRef={scrollRef}
      />
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Fitness</Page.Title>
          <Page.Description>
            Nothing better than getting a sweat going and the heart rate up.
          </Page.Description>
        </Page.Header>
      </Page.Content>
    </Page.Container>
  );
}
