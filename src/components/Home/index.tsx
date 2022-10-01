import { useRef } from 'react';
import { Page } from '../common';
import TitleBar from '../Navigation/TitleBar';
import ActivityDashboard from './ActivityDashboard';
import HomeShowcase from './HomeShowcase';

export default function Home() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container data-cy="home-page" ref={scrollRef}>
      <TitleBar title="Home" titleRef={titleRef} magicTitle scrollRef={scrollRef} />
      {/* Keep this div to trigger the magic scroll */}
      <div style={{ padding: '1rem' }} ref={titleRef} />
      <Page.Content>
        {/* <HomeShowcase /> */}
        <ActivityDashboard />
      </Page.Content>
    </Page.Container>
  );
}
