import { useEffect, useState } from 'react';
import { getTraktListData } from './helpers';
import { TraktShow } from './Trakt.types';
import TraktItem from './TraktItem';
import { DataGrid } from '~/components/common/Grid';

interface TraktListProps {
  accessToken: string;
  url: string;
  placeholderCount: number;
  posterConfig: any;
  itemLimit?: number;
}

export default function TraktList({
  accessToken,
  url,
  placeholderCount,
  posterConfig,
  itemLimit,
}: TraktListProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [shows, setShows] = useState<TraktShow[]>([]);

  const getData = async () => {
    try {
      setShows(await getTraktListData(accessToken, url, itemLimit));
      setLoading(false);
    } catch (e) {
      setError('An error occurred getting data from Spotify.');
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataGrid
      config={{
        cols: 2,
        spacing: 'xl',
        breakpoints: [
          { maxWidth: 'xl', cols: 2, spacing: 'xl' },
          { maxWidth: 'lg', cols: 2, spacing: 'lg' },
          { maxWidth: 'md', cols: 2, spacing: 'md' },
          { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'xs' },
        ],
      }}
      error={error}
      loading={loading}
      placeholder={<div />}
      placeholderCount={placeholderCount}
    >
      {shows.map((show) => (
        <TraktItem posterConfig={posterConfig} {...show} />
      ))}
    </DataGrid>
  );
}
