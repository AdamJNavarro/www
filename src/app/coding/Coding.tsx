'use client';

import { useRef } from 'react';
import { Page, Section } from '~/components/common';
import TitleBar from '~/components/Navigation/TitleBar';
import CareerTimeline from './CareerTimeline';
import CodingLanguages from './CodingLanguages';
import CodingProjects from './CodingProjects';

const desc = 'A look into all things coding-related in my life.';

export default function Coding() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar
        title="Coding"
        titleRef={titleRef}
        magicTitle
        scrollRef={scrollRef}
      />
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Coding</Page.Title>
          <Page.Description>{desc}</Page.Description>
        </Page.Header>

        <Section.Container>
          <Section.Header>
            <Section.Title>Career Timeline</Section.Title>
          </Section.Header>
          <Section.Content>
            <CareerTimeline />
          </Section.Content>
        </Section.Container>
        <Section.Container>
          <Section.Header>
            <Section.Title>Languages</Section.Title>
          </Section.Header>
          <Section.Content>
            <CodingLanguages />
          </Section.Content>
        </Section.Container>
      </Page.Content>
    </Page.Container>
  );
}
