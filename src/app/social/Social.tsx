'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import TitleBar from '~/components/Navigation/TitleBar';
import SocialShowcase from './SocialShowcase';

export default function Social() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar
        title="Social"
        titleRef={titleRef}
        magicTitle
        scrollRef={scrollRef}
      />
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
