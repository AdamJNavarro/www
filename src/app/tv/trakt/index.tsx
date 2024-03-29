import Link from 'next/link';

import { traktData } from '~/app/data/trakt';
import TraktPoster from './TraktPoster';
import { Content } from '~/components/Layouts/Page';
import Stats from '~/components/common/Stats';

const { watching, watched, favorites, stats } = traktData;

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
    </>
  );
}

function TraktList({ data }: any) {
  return (
    <div className="w-shell-full bg-slate-900/35 tablet:mx-0 tablet:bg-transparent">
      <div className="grid grid-cols-1 tablet:gap-4 tablet:grid-cols-2">
        {data.map((item) => (
          <Link
            href={item.url}
            key={item.title}
            className="flex items-center px-6 py-5 tablet:px-4 tablet:bg-surface tablet:border-surface hover-surface tablet:rounded-md"
          >
            <div className="flex-initial flex-shrink-0 justify-center mr-6">
              <TraktPoster posterId={item.showIds.tmdb} title={item.title} />
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
