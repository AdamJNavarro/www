import { useQuery } from '@apollo/client';
import { Text, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { GetLastReadBookData } from '~/components/Books/Literal/Literal.types';
import { GET_BOOKS_BY_STATE_QUERY } from '~/gql/queries/literal';
import { buildNamesString } from '~/utils';
import DashboardCard from './DashboardCard';

export default function BookRead() {
  const theme = useMantineTheme();
  const [book, setBook] = useState<any>(null);
  const { loading } = useQuery<GetLastReadBookData>(GET_BOOKS_BY_STATE_QUERY, {
    context: {
      serviceName: 'literal',
    },
    variables: {
      limit: 1,
      offset: 0,
      readingStatus: 'FINISHED',
      profileId: 'cl2jedoby6210890hxe5ct6ugc7',
    },
    onCompleted(data) {
      setBook(data.booksByReadingStateAndProfile[0]);
    },
    onError(error) {
      console.log('BR ERR', error);
    },
  });

  return (
    <DashboardCard
      label="Book Read"
      href={book === null ? '' : `https://literal.club/book/${book.slug}`}
      loading={book === null}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1660527872/logos/literal.png"
    >
      <Text weight={500} size={theme.fontSizes.lg}>
        {book === null ? '' : book.title}
      </Text>
      <Text size="md" weight={500}>
        {book === null ? '' : buildNamesString(book.authors, 'name')}
      </Text>
    </DashboardCard>
  );
}
