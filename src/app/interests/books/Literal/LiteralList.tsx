import { useQuery } from '@apollo/client';
import { SimpleGrid } from '@mantine/core';
import { GET_BOOKS_BY_STATE_QUERY } from '~/app/data/literal/queries';
import { LiteralStatus } from '~/app/data/literal/literal.types';
import LiteralItem from './LiteralItem';

interface LiteralListProps {
  readingStatus: LiteralStatus;
  placeholderCount: number;
  itemLimit: number;
}

export default function LiteralList({
  readingStatus,
  placeholderCount,
  itemLimit,
}: LiteralListProps) {
  const { data, loading, error } = useQuery<any>(GET_BOOKS_BY_STATE_QUERY, {
    context: {
      serviceName: 'literal',
    },
    variables: {
      limit: itemLimit,
      offset: 0,
      readingStatus,
      profileId: 'cl2jedoby6210890hxe5ct6ugc7',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {data.booksByReadingStateAndProfile.map((entry) => (
        <LiteralItem key={entry.id} {...entry} />
      ))}
    </SimpleGrid>
  );
}
