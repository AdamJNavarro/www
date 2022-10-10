import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_BOOKS_BY_STATE_QUERY } from '~/lib/literal/gql/queries';
import { GetLastReadBookData } from '~/lib/literal/literal.types';

import { buildNamesString } from '~/utils';
import Dashboard from './Dashboard';

export default function BookRead() {
  const [book, setBook] = useState<any>(null);
  useQuery<GetLastReadBookData>(GET_BOOKS_BY_STATE_QUERY, {
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
  });

  const loading = book === null;

  return (
    <Dashboard.Card
      label="Book Read"
      href={loading ? '' : `https://literal.club/book/${book.slug}`}
      loading={loading}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1660527872/logos/literal.png"
    >
      <Dashboard.Title>{loading ? 'Now' : book.title}</Dashboard.Title>

      <Dashboard.Details>
        {loading ? 'Loading...' : buildNamesString(book.authors, 'name')}
      </Dashboard.Details>
    </Dashboard.Card>
  );
}
