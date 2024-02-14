'use client';

import { Skeleton } from '@mantine/core';
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
    return (
      <Skeleton style={{ width: 64, height: 64 * 1.5, position: 'relative' }} />
    );
  }

  return (
    <div
      style={{
        width: 64,
        height: 64 * 1.5,
        position: 'relative',
      }}
    >
      <Image src={posterUrl} fill alt={`${title}-poster`} />
    </div>
  );
}
