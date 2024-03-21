import Image from 'next/image';
import Link from 'next/link';
import { getLiteralBooksByStatus } from '~/app/data/literal';
import { Content } from '~/components/Layouts/Page';

const pastBooks = getLiteralBooksByStatus('FINISHED', 10);
const currentBooks = getLiteralBooksByStatus('IS_READING', 2);

export default function Literal() {
  return (
    <div>
      <Content.Header>
        <Content.Title>Currently Reading</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-16">
        <LiteralList data={currentBooks} />
      </div>

      <Content.Header>
        <Content.Title>Recently Read</Content.Title>
      </Content.Header>
      <div className="prose mt-8 mb-16">
        <ul>
          {pastBooks.reverse().map((item) => (
            <li key={item.id}>
              <em>{item.title}</em> by {item.authors}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LiteralList({ data }: any) {
  return (
    <div className="w-shell-full bg-slate-900/35 tablet:mx-0 tablet:bg-transparent">
      <div className="grid grid-cols-1 tablet:gap-4 tablet:grid-cols-2">
        {data.map((item) => (
          <Link
            href={item.url}
            key={item.name}
            className="flex items-center px-6 py-5 tablet:px-4 tablet:bg-surface tablet:border-surface hover-surface tablet:rounded-md"
          >
            <div className="flex-initial flex-shrink-0 justify-center mr-6">
              <Image
                src={item.cover}
                width={325}
                height={500}
                alt={`${item.title}-book-cover`}
                className="w-16 h-24"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-surface-primary leading-tight mb-2 text-base">
                {item.title}
              </div>
              <div className="text-surface-tertiary text-sm">{item.authors}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
