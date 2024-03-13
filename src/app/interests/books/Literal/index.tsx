import Image from 'next/image';
import { getLiteralBooksByStatus } from '~/app/data/literal';
import { SocialUrls } from '~/app/social/Social.data';

const wantBooks = getLiteralBooksByStatus('WANTS_TO_READ', 4);
const pastBooks = getLiteralBooksByStatus('FINISHED', 10);
const currentBooks = getLiteralBooksByStatus('IS_READING', 2);

export default function Literal() {
  return (
    <div className="prose dark:prose-invert">
      <div className="mb-12">
        <h2>Books</h2>
        <p className=" text-sm desktop:text-base dark:text-slate-300">
          Data provided by <a href={SocialUrls.literal}>Literal</a>
        </p>
      </div>
      <section>
        <div className="mb-12">
          <h3>Currently Reading</h3>
          <div className="space-y-8">
            {currentBooks.map((item) => (
              <Image
                key={item.id}
                src={item.cover}
                width={640}
                height={500}
                alt={`${item.title}-book-cover`}
                className="w-auto h-auto"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="mb-12">
        <h3>Wants To Read</h3>
        <p>test description sentence</p>
        <div className=" mt-8">
          <ul>
            {wantBooks.map((item) => (
              <li key={item.id}>
                <em>{item.title}</em> by {item.authors}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h3>Recent Books</h3>

        <div className=" mt-8">
          <ul>
            {pastBooks.reverse().map((item) => (
              <li key={item.id}>
                <em>{item.title}</em> by {item.authors}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
