import Image from 'next/image';
import Link from 'next/link';
import routes from '~/app/config/routes';

import { watched, lastUpdated } from './letterboxd/letterboxd.data';
import Stats from '~/components/common/Stats';
import { DataAttribution } from '~/components/common/Attribution';
import { formatDate } from '~/utils/Dates';

export const { metadata } = routes.movies;

const movieStats = [
  { label: 'Films', value: 1546 },
  { label: 'Hours', value: 2899 },
  { label: 'Directors', value: 841 },
];

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

export default async function MoviesPage() {
  return (
    <div>
      <h1 className="page-h1 text-center">Movies</h1>

      <div className="prose mb-24">
        <p>
          I wouldn't classify myself as a cinephile but I'd say I am teetering right
          on the edge. Going to the theater is a weekly ritual and it isn't often
          that I miss a week. As a result, sometimes you end up seeing some
          less-than-stellar films but there is simply something magical about the
          cinema for me. The popcorn. The sound. The immersion.
        </p>
      </div>

      <div className="mb-24">
        <Stats data={movieStats} />
        <div className="text-sm text-surface-tertiary text-center mt-4">
          Updated {formatDate({ date: lastUpdated, format: 'ago' })}
        </div>
      </div>

      <h2 className="page-h2 text-center">All Time Favorites</h2>
      <div className="mb-12">
        <LetterboxdList data={favorites} />
      </div>

      <div className="prose mb-24">
        <p>
          As you can see, Peter Jackson's Lord of the Rings trilogy holds a special
          place in my heart. Frank Darabont's Shawshank is another film that left an
          indelible mark on me. Letterboxd only allows for a Top 4 but I'll be
          creating a custom list and adding more entries in the future.
        </p>
      </div>

      <h2 className="page-h2 text-center">Recently Watched</h2>

      <div className="mb-12">
        <LetterboxdList data={watched} />
      </div>

      <div className="mt-24">
        <DataAttribution sources={['letterboxd']} />
      </div>
    </div>
  );
}

function LetterboxdList({ data }: any) {
  return (
    <div className="grid grid-cols-1 tablet:gap-4 tablet:grid-cols-2">
      {data.map((item) => (
        <Link
          href={item.url}
          key={item.name}
          className="flex items-center  py-5 tablet:px-4 tablet:bg-surface tablet:border-surface tablet:hover-surface tablet:rounded-md tablet:shadow-surface"
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
            <div className="text-surface-primary leading-tight mb-2 text-md">
              {item.name}
            </div>
            <div className="text-surface-tertiary text-sm">{item.year}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
