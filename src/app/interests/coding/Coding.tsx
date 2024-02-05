'use client';

import { useRef } from 'react';
import { Page, Section } from '~/components/common';
import CodingLanguages from './CodingLanguages';

const desc = 'A look into all things coding-related in my life.';

export default function Coding() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Coding</Page.Title>
          <Page.Description>{desc}</Page.Description>
        </Page.Header>
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