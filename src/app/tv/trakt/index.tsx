import Link from 'next/link';

import { traktData } from '~/app/data/trakt';
import { TraktPoster, TraktPosterLoading } from './TraktPoster';
import Stats from '~/components/common/Stats';
import { Suspense } from 'react';
import { formatDate } from '~/utils/Dates';

const { watching, watched, favorites, stats, genres, updatedAt } = traktData;
const highestGenreTotal = genres.reduce((a, b) => (a.total > b.total ? a : b)).total;

const statsData = [
  { label: 'Shows', value: stats.shows },
  { label: 'Episodes', value: stats.episodes },
  { label: 'Hours', value: Math.round(stats.minutes / 60) },
];

export default function Trakt() {
  return (
    <>
      <div className="mb-24">
        <Stats data={statsData} />
        <div className="text-sm text-surface-tertiary text-center mt-4">
          Updated {formatDate({ date: updatedAt, format: 'ago' })}
        </div>
      </div>

      <h2 className="page-h2 text-center">All-Time Favorites</h2>

      <div className="mb-24">
        <TraktList data={favorites} />
      </div>

      <h2 className="page-h2 text-center">Currently Watching</h2>

      <div className="mb-24">
        <TraktList data={watching} />
      </div>

      <h2 className="page-h2 text-center">Recently Finished</h2>

      <div className="mb-24">
        <TraktList data={watched.slice(0, 4)} />
      </div>

      <h2 className="page-h2 text-center">Genres Breakdown</h2>

      <div className="mb-24">
        <Genres />
      </div>
    </>
  );
}

function TraktList({ data }: any) {
  return (
    <div className="grid grid-cols-1 tablet:gap-4 tablet:grid-cols-2">
      {data.map((item) => (
        <Link
          href={item.url}
          key={item.title}
          className="flex items-center py-5 tablet:px-4 tablet:bg-surface tablet:border-surface tablet:hover-surface tablet:rounded-md tablet:shadow-surface"
        >
          <div className="flex-initial flex-shrink-0 justify-center mr-6">
            <Suspense fallback={<TraktPosterLoading />}>
              <TraktPoster item={item} />
            </Suspense>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-surface-primary leading-tight mb-2 text-md">
              {item.title}{' '}
              {item.type === 'season' ? `(S${item.seasonNumber})` : null}
            </div>
            <div className="text-surface-tertiary text-sm">{item.year}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Genres() {
  return (
    <div className="flex flex-col space-y-3">
      {genres.map((item) => {
        const barWidth = (item.total / highestGenreTotal) * 100;
        const finalWidth = barWidth < 100 ? barWidth + 5 : barWidth;
        return (
          <div key={item.genre} className="flex">
            <div className="flex-1">
              <div className="text-md font-medium capitalize text-slate-700 dark:text-slate-200">
                {item.genre}
              </div>
            </div>
            <div className="flex-1">
              <div
                className="h-6 bg-sky-600 dark:bg-sky-600 rounded-sm"
                style={{ width: `${finalWidth}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
