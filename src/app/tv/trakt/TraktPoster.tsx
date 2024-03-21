'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';
import { getTmdbPoster } from '~/app/data/tmdb';

interface TraktPosterProps {
  posterId: number;
  title: string;
}

export default function TraktPoster({ posterId, title }: TraktPosterProps) {
  const [posterUrl, setPosterUrl] = useState<any>(null);

  useEffect(() => {
    (async () => {
      setPosterUrl(await getTmdbPoster(posterId));
    })();
  }, []);

  if (!posterUrl) {
    return null;
  }

  return (
    <Image
      src={posterUrl}
      width={750}
      height={1125}
      alt={`${title}-tv-poster`}
      className="w-16 h-24"
    />
  );
}
