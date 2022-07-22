import { Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getTmdbPosterUrl } from './helpers';

export default function TmdbPoster({ posterId, posterConfig }: any) {
  const posterSize = posterConfig.sizes.sm;
  const [posterUrl, setPosterUrl] = useState<string>('');

  useEffect(() => {
    (async () => {
      setPosterUrl(
        await getTmdbPosterUrl(posterId, posterSize, posterConfig.baseUrl)
      );
    })();
  }, []);

  return (
    <div
      style={{
        width: 64,
        height: 64 * 1.5,
      }}
    >
      <Image src={posterUrl} fit="cover" radius="sm" />
    </div>
  );
}
