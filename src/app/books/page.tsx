import routes from '~/app/config/routes';
import { getLiteralBooksByStatus } from '../data/literal';
import Link from 'next/link';
import Image from 'next/image';
import Stats from '~/components/common/Stats';

export const { metadata } = routes.books;

const literalUrl = 'https://literal.club/adamjnavarro';

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

const recentlyReadLimit = 10;
const finishedBooks = getLiteralBooksByStatus('FINISHED');
const readPagesCount = finishedBooks.reduce((a, b) => a + b.pageCount, 0);
const currentBooks = getLiteralBooksByStatus('IS_READING', 2);
const bookStats = [
  { label: 'Books Finished', value: finishedBooks.length },
  { label: 'Pages Read', value: readPagesCount },
];

export default async function BooksPage() {
  return (
    <div>
      <h1 className="page-h1 text-center">Books</h1>

      <div className="mb-24">
        <Stats data={bookStats} />
      </div>

      <h2 className="page-h2 text-center">Currently Reading</h2>

      <div className="mb-12">
        <LiteralList data={currentBooks} />
      </div>
      <div className="prose mb-24">
        <p>
          I try to limit myself to no more than two books at a time. In order to keep
          things fresh, I make an effort to rotate between non-fiction and fiction.
          Typically I am apprehensive towards longer series and gravitate towards
          standalone books but if I hear enough good things, I will take the plunge.
        </p>
      </div>

      <h2 className="page-h2 text-center">Recently Read</h2>

      <div className="prose mb-12">
        <ul>
          {finishedBooks
            .slice(-recentlyReadLimit)
            .reverse()
            .map((item) => (
              <li key={item.id}>
                <em>{item.title}</em> by {item.authors}
              </li>
            ))}
        </ul>
      </div>
      <div className="prose mb-24">
        <p>
          Here are the last 10 books I’ve finished. To see all of my past reading
          (since I started logging), you can check out my{' '}
          <a
            href={`${literalUrl}/has-read`}
            target="_blank"
            rel="noopener noreferrer"
          >
            finished log
          </a>
          . If you have any questions or want to discuss any of the titles, feel free
          to <Link href={routes.social.href}>reach out</Link>. Recommendations are
          always welcome too!
        </p>
      </div>

      <h2 className="page-h2 text-center">Favorite Quotes</h2>

      <div className="prose flex flex-col space-y-12">
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

function LiteralList({ data }: any) {
  return (
    <div className="grid grid-cols-1 tablet:gap-4 tablet:grid-cols-2">
      {data.map((item) => (
        <Link
          href={item.url}
          key={item.title}
          className="flex items-center py-5 tablet:px-4 tablet:bg-surface tablet:border-surface tablet:hover-surface tablet:rounded-md tablet:shadow-surface"
        >
          <div className="flex-initial flex-shrink-0 justify-center mr-6">
            <Image
              src={item.cover}
              width={325}
              height={500}
              alt={`${item.title}-book-cover`}
              className="w-16 h-24 shadow-md tablet:shadow-none"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-surface-primary leading-tight mb-2 text-md">
              {item.title}
            </div>
            <div className="text-surface-tertiary text-sm">{item.authors}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
