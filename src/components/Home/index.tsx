import { useRef } from 'react';

import { Space } from '@mantine/core';
import { Page, Section } from '../common';
import TitleBar from '../Navigation/TitleBar';
import HomeShowcase from './HomeShowcase';
import ActivityDashboard from './ActivityDashboard';

export default function Home() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container data-cy="home-page" ref={scrollRef}>
      <TitleBar title="Home" titleRef={titleRef} magicTitle scrollRef={scrollRef} />
      {/* Keep this div to trigger the magic scroll */}
      <div style={{ padding: '1rem' }} ref={titleRef} />
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
            <ActivityDashboard />
          </Section.Content>
        </Section.Container>
      </Page.Content>
    </Page.Container>
  );
}
