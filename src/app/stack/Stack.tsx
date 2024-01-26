'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import StackList from './StackList';

export default function Stack() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Stack</Page.Title>
          <Page.Description>A collection of products I use.</Page.Description>
        </Page.Header>
        <StackList />
      </Page.Content>
    </Page.Container>
  );
}
