import routes from '~/app/config/routes';
import { Page } from '~/components/common';
import QuotesList from './QuotesList';
import Literal from '../books/Literal';

export const { metadata } = routes.quotes;

export default async function QuotesPage() {
  return (
    <div className="prose dark:prose-invert">
      <div className="mb-16">
        <h1>Quotes</h1>
        <p>A collection of my favorite words of wisdom.</p>
      </div>
      {/* <QuotesList /> */}
      <Literal />
    </div>
  );
}
