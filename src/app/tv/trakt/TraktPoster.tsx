import Image from 'next/image';

import { getTmdbPoster } from '~/app/data/tmdb';

interface TraktPosterProps {
  posterId: number;
  title: string;
}

export function TraktPosterLoading() {
  return (
    <div className="animate-pulse w-16 h-24 bg-slate-300 dark:bg-slate-800/60" />
  );
}

export async function TraktPoster({ posterId, title }: TraktPosterProps) {
  const { data, error } = await getTmdbPoster(posterId);

  if (error) return null;

  return (
    <Image
      src={`https://image.tmdb.org/t/p/original${data.file_path}`}
      width={data.width}
      height={data.height}
      alt={`${title}-tv-poster`}
      className="w-16 h-24"
    />
  );
}
