'use client';

import { useRef } from 'react';
import { Page } from '~/components/common';
import TitleBar from '~/components/Navigation/TitleBar';
import CharitiesList from './CharitiesList';
import CharityGameDescription from './CharityGameDescription';
import CharityStats from './CharityStats';

export default function CharityGame() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <TitleBar
        title="Charity Game"
        titleRef={titleRef}
        magicTitle
        scrollRef={scrollRef}
      />
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Charity Game</Page.Title>
          <Page.Description>
            A music-based trivia competition I run on Instagram that began in
            February of 2021.
          </Page.Description>
        </Page.Header>
        <CharityStats />
        <CharityGameDescription />
        <CharitiesList />
      </Page.Content>
    </Page.Container>
  );
}
