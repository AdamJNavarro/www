interface LiteralAuthor {
  id: string;
  name: string;
}

type LiteralStatus =
  | 'WANTS_TO_READ'
  | 'IS_READING'
  | 'FINISHED'
  | 'DROPPED'
  | 'NONE';

interface LiteralBook {
  id: string;
  slug: string;
  title: string;
  isbn13: string;
  cover: string;
  authors: LiteralAuthor[];
}

interface LiteralReadingState {
  id: string;
  status: LiteralStatus;
  createdAt: string;
  book: LiteralBook;
}

interface GetBooksData {
  myReadingStates: LiteralReadingState[];
}

interface GetLastReadBookData {
  booksByReadingStateAndProfile: LiteralBook[];
}

interface GetHighlightData {
  momentsByHandleAndBookId: any;
}

export type {
  LiteralBook,
  LiteralStatus,
  LiteralReadingState,
  GetBooksData,
  GetLastReadBookData,
  GetHighlightData,
};
