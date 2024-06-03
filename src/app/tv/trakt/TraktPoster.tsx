import Image from 'next/image';

import { getTmdbPoster } from '~/app/data/tmdb';

export function TraktPosterLoading() {
  return (
    <div className="animate-pulse w-16 h-24 bg-slate-200 dark:bg-slate-800/60" />
  );
}

export async function TraktPoster({ item }: any) {
  const { title, type, showIds } = item;
  const { data, error } = await getTmdbPoster({
    type,
    showId: showIds.tmdb,
    seasonNumber: type === 'season' ? item.seasonNumber : 1,
  });

  if (error) return null;

  return (
    <Image
      src={`https://image.tmdb.org/t/p/original${data.file_path}`}
      width={data.width}
      height={data.height}
      alt={`${title}-tv-poster`}
      className="w-16 h-24 shadow-md tablet:shadow-none"
    />
  );
}
