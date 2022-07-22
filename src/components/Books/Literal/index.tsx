import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { GET_BOOKS_QUERY } from '~/gql/queries/literal';
import CurrentReading from './CurrentReading';
import { GetBooksData, LiteralReadingState } from './Literal.types';
import PastReading from './PastReading';

export default function LiteralContent() {
  const [sorted, setSorted] = useState(false);
  const [pastReading, setPastReading] = useState<LiteralReadingState[]>([]);
  const [currentReading, setCurrentReading] = useState<LiteralReadingState[]>([]);

  const { loading, error } = useQuery<GetBooksData>(GET_BOOKS_QUERY, {
    context: {
      serviceName: 'literal',
    },
    onCompleted({ myReadingStates: entries }) {
      const pastEntries: LiteralReadingState[] = [];
      const currentEntries: LiteralReadingState[] = [];
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < entries.length; index++) {
        const entry = entries[index];
        const { status } = entry;
        if (status === 'IS_READING') {
          currentEntries.push(entry);
        } else if (status === 'DROPPED' || status === 'FINISHED') {
          pastEntries.push(entry);
        }
      }
      setPastReading(pastEntries);
      setCurrentReading(currentEntries);
      setSorted(true);
    },
  });

  if (loading && !sorted) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <>
      <CurrentReading entries={currentReading} />
      <PastReading entries={pastReading} />
    </>
  );
}
