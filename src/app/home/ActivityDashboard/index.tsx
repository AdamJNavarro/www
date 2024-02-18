import { SimpleGrid } from '@mantine/core';
import BookRead from './BookRead';

import ShowWatched from './ShowWatched';
import MovieWatched from './MovieWatched';

export default function ActivityDashboard({ children }: { children: any }) {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      <BookRead />
      <MovieWatched />
      <ShowWatched />
      {children}
    </SimpleGrid>
  );
}
