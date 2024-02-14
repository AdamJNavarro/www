import { Anchor } from '@mantine/core';
import Link from 'next/link';
import routes from '~/app/config/routes';
import { SocialUrls } from '~/app/social/Social.data';
import { Page } from '~/components/common';
import { lastUpdated } from './letterboxd/letterboxd.data';
import LetterboxdStats from './letterboxd/LetterboxdStats';
import LetterboxdWatched from './letterboxd/LetterboxdWatched';
import LetterboxdWatchlist from './letterboxd/LetterboxdWatchlist';
import LetterboxdFavorites from './letterboxd/LetterboxdFavorites';

export const { metadata } = routes.movies;

export default async function MoviesPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Movies</Page.Title>
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
