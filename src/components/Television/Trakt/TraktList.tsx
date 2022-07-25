import { useTraktListFetch } from './Trakt.utils';

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
  const {
    loading,
    error,
    data = [],
  } = useTraktListFetch({
    opts: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    vars: {
      url,
      limit: itemLimit,
    },
  });

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
      {data.map((show) => (
        <TraktItem posterConfig={posterConfig} {...show} />
      ))}
    </DataGrid>
  );
}
