import { SimpleGrid } from '@mantine/core';
import BookRead from './BookRead';
import CardioSession from './CardioSession';
import SongLiked from './SongLiked';
import WordLearned from './WordLearned';

export default function ActivityDashboard() {
  return (
    <SimpleGrid
      cols={2}
      spacing="xl"
      breakpoints={[
        { maxWidth: 'xl', cols: 2, spacing: 'xl' },
        { maxWidth: 'lg', cols: 2, spacing: 'xl' },
        { maxWidth: 'md', cols: 2, spacing: 'lg' },
        { maxWidth: 'sm', cols: 1, spacing: 'lg' },
        { maxWidth: 'xs', cols: 1, spacing: 'md' },
      ]}
    >
      <BookRead />
      <CardioSession />
      <SongLiked />
      <WordLearned />
    </SimpleGrid>
  );
}
