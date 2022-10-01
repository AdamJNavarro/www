import { SimpleGrid } from '@mantine/core';
import BookRead from './BookRead';
import CardioSession from './CardioSession';

export default function ActivityDashboard() {
  return (
    <SimpleGrid cols={2}>
      <BookRead />
      <CardioSession />
    </SimpleGrid>
  );
}
