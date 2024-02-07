'use client';

import { useRef } from 'react';
import { Anchor } from '@mantine/core';
import Link from 'next/link';
import { Page } from '~/components/common';
import { SocialUrls } from '~/app/social/Social.data';
import { lastUpdated } from './letterboxd/letterboxd.data';
import LetterboxdWatchlist from './letterboxd/LetterboxdWatchlist';
import LetterboxdWatched from './letterboxd/LetterboxdWatched';
import LetterboxdFavorites from './letterboxd/LetterboxdFavorites';
import LetterboxdStats from './letterboxd/LetterboxdStats';

export default function Movies() {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>Movies</Page.Title>
          <Page.Description>
            A peek into my cinematic tastes. Data provided by{' '}
            <Anchor component={Link} href={SocialUrls.letterboxd} target="_blank">
              Letterboxd
            </Anchor>
            . (Last updated: {lastUpdated})
          </Page.Description>
        </Page.Header>
        <LetterboxdStats />
        <LetterboxdWatched />
        <LetterboxdWatchlist />
        <LetterboxdFavorites />
      </Page.Content>
    </Page.Container>
  );
}
