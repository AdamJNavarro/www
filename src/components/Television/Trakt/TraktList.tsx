import { useTraktListFetch } from './Trakt.utils';

import TraktItem from './TraktItem';
import { DataGrid } from '~/components/common/Grid';

interface TraktListProps {
  url: string;
  placeholderCount: number;
  itemLimit?: number;
}

export default function TraktList({
  url,
  placeholderCount,
  itemLimit,
}: TraktListProps) {
  const {
    loading,
    error,
    data = [],
  } = useTraktListFetch({
    opts: {},
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
      {data.map((show, index) => (
        <TraktItem key={`${show.id}-${index}`} {...show} />
      ))}
    </DataGrid>
  );
}
