import Image from 'next/image';
import { Suspense } from 'react';

import { getTmdbPoster } from '~/app/data/tmdb';

interface TraktPosterProps {
  posterId: number;
  title: string;
}

export default async function TraktPoster({ posterId, title }: TraktPosterProps) {
  const { data, error } = await getTmdbPoster(posterId);

  if (error) return null;

  return (
    <Suspense
      fallback={<div className="animate-pulse w-16 h-24 dark:bg-slate-800/60" />}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${data.file_path}`}
        width={data.width}
        height={data.height}
        alt={`${title}-tv-poster`}
        className="w-16 h-24"
      />
    </Suspense>
  );
}
