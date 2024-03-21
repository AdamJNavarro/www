import routes from '~/app/config/routes';
import { Content, Page } from '~/components/Layouts/Page';
import Literal from './Literal';
import { SocialUrls } from '~/app/social/Social.data';

export const { metadata } = routes.books;

interface QuoteProps {
  author: string;
  source: string;
  words: string;
}

const quotes: QuoteProps[] = [
  {
    author: 'J.R.R. Tolkien',
    source: 'The Fellowship of the Ring',
    words: `I wish it need not have happened in my time,” said Frodo.
    “So do I,” said Gandalf, “and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.`,
  },
];

export default async function BooksPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Books</Page.Title>
        <p>
          A peek into my reading likes and consumption. Data provided by{' '}
          <a href={SocialUrls.literal} target="_blank" rel="noopener noreferrer">
            Literal
          </a>
          .
        </p>
      </Page.Header>
      <Literal />
      <Content.Header>
        <Content.Title>Favorite Quotes</Content.Title>
      </Content.Header>
      <div className="prose mt-8 flex flex-col space-y-12">
        {quotes.map((quote, index) => (
          <blockquote key={`quote-${index}`}>
            <p>{quote.words}</p>
            <footer>
              {`-- ${quote.author} `}
              <cite>{`(${quote.source})`}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
