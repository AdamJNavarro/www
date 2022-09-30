import Image from 'next/image';

import { useEffect, useState } from 'react';
import { getTvPoster } from './Tmdb.utils';

interface TmdbPosterProps {
  posterId: number;
  title: string;
}

export default function TmdbPoster({ posterId, title }: TmdbPosterProps) {
  const [posterUrl, setPosterUrl] = useState<string>('');

  useEffect(() => {
    (async () => {
      setPosterUrl(await getTvPoster(posterId));
    })();
  }, []);

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
