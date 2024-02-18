import data from './data.json';

export type LiteralStatus =
  | 'WANTS_TO_READ'
  | 'IS_READING'
  | 'FINISHED'
  | 'DROPPED'
  | 'NONE';

export type LiteralBook = {
  status: LiteralStatus;
  createdAt: any;
  id: string;
  url: string;
  title: string;
  isbn: string;
  cover: string;
  authors: string;
};

export const literalData = data as {
  books: LiteralBook[];
  updatedAt: any;
};

export function getLiteralBooksByStatus(
  status: LiteralStatus,
  limit: number
): LiteralBook[] {
  const matchingBooks = literalData.books.filter((book) => book.status === status);
  return matchingBooks.slice(-limit);
}

export const lastBookFinished = literalData.books.findLast(
  ({ status }) => status === 'FINISHED'
);
