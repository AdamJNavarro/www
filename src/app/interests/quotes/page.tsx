import routes from '~/app/config/routes';
import { Page } from '~/components/common';
import QuotesList from './QuotesList';

export const { metadata } = routes.quotes;

export default async function QuotesPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Quotes</Page.Title>
          <Page.Description>
            A collection of my favorite words of wisdom.
          </Page.Description>
        </Page.Header>
        <QuotesList />
      </Page.Content>
    </Page.Container>
  );
}
