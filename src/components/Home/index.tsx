import { Space } from '@mantine/core';
import { useRef } from 'react';
import useSWR from 'swr';
import { fetcher } from '~/utils';
import { Page, Section } from '../common';
import TitleBar from '../Navigation/TitleBar';
import ActivityDashboard from './ActivityDashboard';
import HomeShowcase from './HomeShowcase';

export default function Home() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  /* const { data, error } = useSWR('/api/spotify/liked-tracks?limit=5', fetcher);
  console.log('DATA', data); */

  return (
    <Page.Container data-cy="home-page" ref={scrollRef}>
      <TitleBar title="Home" titleRef={titleRef} magicTitle scrollRef={scrollRef} />
      {/* Keep this div to trigger the magic scroll */}
      <div style={{ padding: '1rem' }} ref={titleRef} />
      <Page.Content>
        <HomeShowcase />
        <Space h={75} />
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
        {/* <ActivityDashboard /> */}
      </Page.Content>
    </Page.Container>
  );
}
