import { Skeleton } from '@mantine/core';
import Image from 'next/legacy/image';

import { useEffect, useState } from 'react';
import { getTvPoster } from '~/lib/tmdb';

interface TraktPosterProps {
  posterId: number;
  title: string;
}

export default function TraktPoster({ posterId, title }: TraktPosterProps) {
  const [posterUrl, setPosterUrl] = useState<any>(null);

  useEffect(() => {
    (async () => {
      setPosterUrl(await getTvPoster(posterId));
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
      <Image src={posterUrl} layout="fill" alt={`${title}-poster`} />
    </div>
  );
}
