import { useRef } from 'react';
import { Page, Section } from '../common';

import TitleBar from '../Navigation/TitleBar';
import Biography from './Biography';
import InterestsGrid from './InterestsGrid';

export default function About() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar title="About" titleRef={titleRef} magicTitle scrollRef={scrollRef} />
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>About Me</Page.Title>
          <Page.Description>Learn more about my life.</Page.Description>
        </Page.Header>
        <Section.Container>
          <Section.Header>
            <Section.Title>Biography</Section.Title>
          </Section.Header>
          <Section.Content>
            <Biography />
          </Section.Content>
        </Section.Container>
        <Section.Container id="interests">
          <Section.Header>
            <Section.Title>Interests</Section.Title>
          </Section.Header>
          <Section.Content>
            <InterestsGrid />
          </Section.Content>
        </Section.Container>
      </Page.Content>
    </Page.Container>
  );
}
