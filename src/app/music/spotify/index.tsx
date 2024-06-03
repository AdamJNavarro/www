import { ReactElement, Suspense } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import {
  getLatestLikedSongs,
  getSpotifyArtists,
  getSpotifyPodcasts,
} from '~/app/data/spotify';
import { nFormatter } from '~/utils';
import React from 'react';
import { formatDate } from '~/utils/Dates';

const spotifyImageClassName =
  'h-16 w-16 rounded-sm shadow-md dark:shadow-none dark:border dark:border-slate-800';

export default function SpotifyContent() {
  return (
    <>
      <h2 className="page-h2 text-lgeft tablet:text-center">Favorite Artists</h2>

      <div className="mb-24">
        <Suspense fallback={<SpotifySkeletons count={10} />}>
          <SpotifyArtists />
        </Suspense>
      </div>

      <h2 className="page-h2 text-lgeft tablet:text-center">Recently Liked Songs</h2>

      <div className="mb-24">
        <Suspense fallback={<SpotifySkeletons count={6} />}>
          <SpotifyTracks />
        </Suspense>
      </div>

      <h2 className="page-h2 text-lgeft tablet:text-center">Favorite Podcasts</h2>

      <div className=" mb-24">
        <Suspense fallback={<SpotifySkeletons count={4} />}>
          <SpotifyPodcasts />
        </Suspense>
      </div>
    </>
  );
}

async function SpotifyArtists() {
  const { data, error } = await getSpotifyArtists();

  if (error) return null;
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 gap-8 tablet:gap-12 tablet:grid-cols-3">
      {data.map((item) => (
        <Link href={item.url} key={item.name} className="flex items-center">
          <Image
            src={item.image}
            height={128}
            width={128}
            alt={`${item.name}-spotify-cover-art`}
            className={spotifyImageClassName}
          />
          <div className="flex grow flex-col mx-4">
            <div className="text-md text-surface-primary">{item.name}</div>
            <div className="text-sm text-surface-secondary">
              {nFormatter(item.followers, 0)} followers
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

async function SpotifyTracks() {
  const { data, error } = await getLatestLikedSongs({ limit: 6 });

  if (error) return null;
  if (!data) return null;

  return (
    <div className="flex flex-col space-y-8">
      {data.map((item) => (
        <Link href={item.url} key={item.name} className="flex items-center">
          <Image
            src={item.image}
            height={128}
            width={128}
            alt={`${item.name}-spotify-cover-art`}
            className={spotifyImageClassName}
          />
          <div className="flex grow flex-col mx-4">
            <div className="text-md text-surface-primary">{item.name}</div>
            <div className="text-sm text-surface-secondary">{item.artist}</div>
          </div>
          <div className="hidden tablet:block text-sm text-surface-tertiary">
            {formatDate({ date: item.dateLiked, format: 'ago' })}
          </div>
        </Link>
      ))}
    </div>
  );
}

async function SpotifyPodcasts() {
  const { data, error } = await getSpotifyPodcasts();

  if (error) return null;
  if (!data) return null;

  return (
    <div className="flex flex-col space-y-8">
      {data.map((item) => (
        <Link href={item.url} key={item.name} className="flex items-center">
          <Image
            src={item.image}
            height={128}
            width={128}
            alt={`${item.name}-spotify-cover-art`}
            className={spotifyImageClassName}
          />
          <div className="flex grow flex-col mx-4">
            <div className="text-md text-surface-primary">{item.name}</div>
            <div className="text-sm text-surface-secondary">{item.publisher}</div>
          </div>
          <div className="hidden tablet:block text-sm text-surface-tertiary">
            {item.total_episodes} eps
          </div>
        </Link>
      ))}
    </div>
  );
}

function SpotifySkeletons({ count }: { count: number }) {
  const elements: ReactElement[] = [];

  const countCeil = Math.ceil(count);

  for (let i = 0; i < countCeil; i++) {
    const skeletonSpan = (
      <span
        className="h-16 w-16 animate-pulse rounded-sm bg-slate-200 dark:bg-slate-900/80"
        key={i}
      >
        &zwnj;
      </span>
    );
    elements.push(
      <React.Fragment key={i}>
        {skeletonSpan}
        <br />
      </React.Fragment>
    );
  }

  return <div className="flex flex-col space-y-8">{elements}</div>;
}
