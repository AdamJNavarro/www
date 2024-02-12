import { SimpleGrid } from '@mantine/core';
import BookRead from './BookRead';
import SongLiked from './SongLiked';
import WordLearned from './WordLearned';
import ShowWatched from './ShowWatched';
import MovieWatched from './MovieWatched';
import StarredRepo from './StarredRepo';
import StravaSession from './StravaSession';

export default function ActivityDashboard({ data }: any) {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      <WordLearned data={data.latestWord} />
      <MovieWatched />
      <StravaSession />
      <StarredRepo />
      <BookRead />
      <SongLiked />
      <ShowWatched />
    </SimpleGrid>
  );
}
