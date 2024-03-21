import Image from 'next/image';
import Link from 'next/link';
import routes from '~/app/config/routes';

import { Page, Content } from '~/components/Layouts/Page';
import { watched } from './letterboxd/letterboxd.data';
import { SocialUrls } from '~/app/social/Social.data';

export const { metadata } = routes.movies;

const favorites = [
  {
    posterPath: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    url: 'https://boxd.it/2b5O',
  },
  {
    posterPath: '/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg',
    name: 'The Lord of the Rings: The Two Towers',
    year: '2002',
    url: 'https://boxd.it/2b5E',
  },
  {
    posterPath: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
    name: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    url: 'https://boxd.it/2b5u',
  },
  {
    posterPath: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    name: 'The Shawshank Redemption',
    year: '1994',
    url: 'https://boxd.it/2aHi',
  },
];

function Callout(props) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

export default async function MoviesPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Movies</Page.Title>
        <p>
          Data provided by{' '}
          <a href={SocialUrls.letterboxd} target="_blank" rel="noopener noreferrer">
            Letterboxd
          </a>
        </p>
      </Page.Header>

      <p className="prose mb-24">
        Natoque penatibus et magnis dis parturient montes nascetur. Enim praesent
        elementum facilisis leo vel fringilla est ullamcorper. Rhoncus urna neque
        viverra justo nec ultrices dui sapien eget. Felis donec et odio pellentesque
        diam volutpat commodo sed. Ornare aenean euismod elementum nisi quis eleifend
        quam adipiscing. Faucibus interdum posuere lorem ipsum.
      </p>

      {/* <Callout emoji="💡">
        Felis donec et odio pellentesque diam volutpat commodo sed. Ornare aenean
        euismod elementum nisi quis eleifend quam adipiscing. Faucibus interdum
        posuere lorem ipsum.
      </Callout> */}

      <Content.Header>
        <Content.Title>All-Time Favorites</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-12">
        <LetterboxdList data={favorites} />
      </div>

      <p className="prose mb-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis
        bibendum. Quis blandit turpis cursus in hac. Ac odio tempor orci dapibus.
        Ornare lectus sit amet est. Sed vulputate odio ut enim blandit. Elementum
        nibh tellus molestie nunc non blandit massa enim nec. Natoque penatibus et
        magnis dis parturient montes nascetur.
      </p>

      <Content.Header>
        <Content.Title>Recently Watched</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-12">
        <LetterboxdList data={watched} />
      </div>
      <p className="prose mb-24">
        Natoque penatibus et magnis dis parturient montes nascetur. Enim praesent
        elementum facilisis leo vel fringilla est ullamcorper. Rhoncus urna neque
        viverra justo nec ultrices dui sapien eget. Felis donec et odio pellentesque
        diam volutpat commodo sed. Ornare aenean euismod elementum nisi quis eleifend
        quam adipiscing. Faucibus interdum posuere lorem ipsum.
      </p>
    </div>
  );
}

function LetterboxdList({ data }: any) {
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
                src={`https://image.tmdb.org/t/p/original${item.posterPath}`}
                width={640}
                height={960}
                alt={`${item.name} movie poster`}
                className="w-16 h-24"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-surface-primary leading-tight mb-2 text-base">
                {item.name}
              </div>
              <div className="text-surface-tertiary text-sm">{item.year}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
