import { SimpleGrid } from '@mantine/core';
import BookRead from './BookRead';
import SongLiked from './SongLiked';
import WordLearned from './WordLearned';

export default function ActivityDashboard() {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      <BookRead />
      <SongLiked />
      <WordLearned />
    </SimpleGrid>
  );
}
