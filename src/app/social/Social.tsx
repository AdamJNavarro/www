'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import SocialShowcase from './SocialShowcase';

export default function Social() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Social Presence</Page.Title>
          <Page.Description>
            Here are the places you can find me online.
          </Page.Description>
        </Page.Header>
        <SocialShowcase />
      </Page.Content>
    </Page.Container>
  );
}
