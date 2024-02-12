'use client';

import { useRef } from 'react';

import { Space } from '@mantine/core';
import { Page, Section } from '~/components/common';
import HomeShowcase from './HomeShowcase';
import ActivityDashboard from './ActivityDashboard';

export default function Home({ data }: any) {
  const scrollRef = useRef(null);

  return (
    <Page.Container data-cy="home-page" ref={scrollRef}>
      <Page.Content>
        <HomeShowcase />
        <Space h={50} />
        <Section.Container>
          <Section.Header>
            <Section.Title style={{ textAlign: 'center' }}>
              Latest Activity
            </Section.Title>
          </Section.Header>
          <Section.Content>
            <ActivityDashboard data={data} />
          </Section.Content>
        </Section.Container>
      </Page.Content>
    </Page.Container>
  );
}
