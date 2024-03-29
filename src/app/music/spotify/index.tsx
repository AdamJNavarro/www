import { ReactElement, Suspense } from 'react';
import Image from 'next/image';

import Link from 'next/link';
import {
  getLatestLikedSongs,
  getSpotifyArtists,
  getSpotifyPodcasts,
} from '~/app/data/spotify';
import { formatDate, nFormatter } from '~/utils';
import { Content } from '~/components/Layouts/Page';
import React from 'react';

export default function SpotifyContent() {
  return (
    <>
      <Content.Header>
        <Content.Title>Favorite Artists</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-16">
        <Suspense fallback={<SpotifySkeletons count={10} />}>
          <SpotifyArtists />
        </Suspense>
      </div>

      <Content.Header>
        <Content.Title>Recently Liked Songs</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-16">
        <Suspense fallback={<SpotifySkeletons count={6} />}>
          <SpotifyTracks />
        </Suspense>
      </div>

      <Content.Header>
        <Content.Title>Favorite Podcasts</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-16">
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
    <div className="flex flex-col space-y-8">
      {data.map((item) => (
        <Link href={item.url} key={item.name} className="flex items-center">
          <Image
            src={item.image}
            height={128}
            width={128}
            alt={`${item.name}-spotify-cover-art`}
            className="h-12 w-12 rounded-sm dark:border dark:border-slate-800"
          />
          <div className="flex grow flex-col mx-4">
            <div className="text-md text-slate-100/2">{item.name}</div>
            <div className="text-sm text-slate-300/95">
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
            className="h-12 w-12 rounded-sm dark:border dark:border-slate-800"
          />
          <div className="flex grow flex-col mx-4">
            <div className="text-md text-slate-100/2">{item.name}</div>
            <div className="text-sm text-slate-300/95">{item.artist}</div>
          </div>
          <div className="hidden desktop:block text-sm text-slate-400">
            {formatDate(item.dateLiked)}
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
            className="h-12 w-12 rounded-sm dark:border dark:border-slate-800"
          />
          <div className="flex grow flex-col mx-4">
            <div className="text-md text-slate-100/2">{item.name}</div>
            <div className="text-sm text-slate-300/95">{item.publisher}</div>
          </div>
          <div className="hidden desktop:block text-sm text-slate-400">
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
        className="h-12 w-12 bg-surface animate-pulse dark:border dark:border-slate-800"
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
