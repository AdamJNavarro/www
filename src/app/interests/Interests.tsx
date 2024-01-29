'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';

import InterestsGrid from './InterestsGrid';

export default function About() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Interests</Page.Title>
          <Page.Description>Learn more about what I enjoy.</Page.Description>
        </Page.Header>
        <InterestsGrid />
      </Page.Content>
    </Page.Container>
  );
}
