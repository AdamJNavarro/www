import Link from 'next/link';

import { traktData } from '~/app/data/trakt';
import { TraktPoster, TraktPosterLoading } from './TraktPoster';
import { Content } from '~/components/Layouts/Page';
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
        <div className="text-xs text-surface-tertiary text-center mt-4">
          Updated {formatDate({ date: updatedAt, format: 'ago' })}
        </div>
      </div>

      <Content.Header>
        <Content.Title>All-Time Favorites</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-16">
        <TraktList data={favorites} />
      </div>

      <Content.Header>
        <Content.Title>Currently Watching</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-16">
        <TraktList data={watching} />
      </div>

      <Content.Header>
        <Content.Title>Recently Watched</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-16">
        <TraktList data={watched.slice(0, 4)} />
      </div>

      <Content.Header>
        <Content.Title>Genres Breakdown</Content.Title>
      </Content.Header>

      <div className="mt-12 mb-24">
        <Genres />
      </div>
    </>
  );
}

function TraktList({ data }: any) {
  return (
    <div className="w-shell-full dark:bg-slate-900/35 tablet:mx-0 tablet:bg-transparent">
      <div className="grid grid-cols-1 tablet:gap-4 tablet:grid-cols-2">
        {data.map((item) => (
          <Link
            href={item.url}
            key={item.title}
            className="flex items-center px-6 py-5 tablet:px-4 tablet:bg-surface tablet:border-surface tablet:hover-surface tablet:rounded-md tablet:shadow-surface"
          >
            <div className="flex-initial flex-shrink-0 justify-center mr-6">
              <Suspense fallback={<TraktPosterLoading />}>
                <TraktPoster posterId={item.showIds.tmdb} title={item.title} />
              </Suspense>
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-surface-primary leading-tight mb-2 text-base">
                {item.title}
              </div>
              <div className="text-surface-tertiary text-sm">{item.year}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Genres() {
  return (
    <div className="flex flex-col space-y-3 desktop:w-1/2">
      {genres.map((item) => {
        const barWidth = (item.total / highestGenreTotal) * 100;
        const finalWidth = barWidth < 100 ? barWidth + 5 : barWidth;
        return (
          <div key={item.genre} className="flex">
            <div className="flex-1">
              <div className="text-base font-medium capitalize text-slate-700 dark:text-slate-200">
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
