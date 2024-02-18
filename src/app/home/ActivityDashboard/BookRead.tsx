import Dashboard from './Dashboard';
import { lastBookFinished } from '~/app/data/literal';

export default function BookRead() {
  const book = lastBookFinished;

  if (!book) return <div />;

  return (
    <Dashboard.Card label="Book Read" href={book.url} logo="/img/logos/literal.svg">
      <Dashboard.Title lineClamp={1}>{book.title}</Dashboard.Title>

      <Dashboard.Details lineClamp={1}>{book.authors}</Dashboard.Details>
    </Dashboard.Card>
  );
}
