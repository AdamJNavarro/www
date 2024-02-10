'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import MiscUsesList from './MiscUsesList';
import ComputerUsesList from './ComputerUsesList';

export default function Uses() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Uses</Page.Title>
          <Page.Description>A collection of products I use.</Page.Description>
        </Page.Header>
        <ComputerUsesList />
        <MiscUsesList />
      </Page.Content>
    </Page.Container>
  );
}
