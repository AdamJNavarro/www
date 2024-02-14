'use client';

import CurrentReadingList from './CurrentReadingList';
import PastReadingList from './PastReadingList';
import WantToReadList from './WantToReadList';

export default function Literal() {
  return (
    <>
      <CurrentReadingList />
      <WantToReadList />
      <PastReadingList />
    </>
  );
}
