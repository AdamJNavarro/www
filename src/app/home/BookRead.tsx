import Dashboard from './Dashboard';
import { lastBookFinished } from '~/app/data/literal';

export default function BookRead() {
  const book = lastBookFinished;

  if (!book) return <div />;

  return (
    <Dashboard.Card
      label="Book Read"
      href={book.url}
      darkLogo="/img/logos/literal-dark.svg"
      lightLogo="/img/logos/literal-light.svg"
    >
      <Dashboard.Title>{book.title}</Dashboard.Title>
      <Dashboard.Details>{book.authors}</Dashboard.Details>
    </Dashboard.Card>
  );
}
