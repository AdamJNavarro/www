'use client';

import { SimpleGrid } from '@mantine/core';
import BookRead from './BookRead';
import SongLiked from './SongLiked';
import WordLearned from './WordLearned';
import ShowWatched from './ShowWatched';
import MovieWatched from './MovieWatched';
import StarredRepo from './StarredRepo';
import StravaSession from './StravaSession';
import { WordProps } from '~/app/interests/words/Words.types';
import Dashboard from './Dashboard';

export type ActivityDashboardData = {
  word: WordProps;
  strava: any;
  song: any;
  repo: any;
};

export default function ActivityDashboard({
  data,
}: {
  data: ActivityDashboardData;
}) {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      <WordLearned data={data.word} />
      <MovieWatched />
      <StravaSession data={data.strava} />
      <StarredRepo data={data.repo} />
      <BookRead />
      <SongLiked data={data.song} />
      <ShowWatched />
    </SimpleGrid>
  );
}

export function ActivityDashboardLoading() {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      <Dashboard.Loading />
      <Dashboard.Loading />
      <Dashboard.Loading />
      <Dashboard.Loading />
      <Dashboard.Loading />
      <Dashboard.Loading />
    </SimpleGrid>
  );
}
