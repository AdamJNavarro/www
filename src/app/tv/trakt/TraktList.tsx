import TraktItem from './TraktItem';
import { DataGrid } from '~/components/common/Grid';
import { useTraktList } from '~/lib/trakt';
import { TraktListEndpoints } from '~/lib/trakt/trakt.types';

interface TraktListProps {
  listId: TraktListEndpoints;
  placeholderCount: number;
  itemLimit?: number;
}

export default function TraktList({
  listId,
  placeholderCount,
  itemLimit,
}: TraktListProps) {
  const { error, data } = useTraktList({
    listId,
    limit: itemLimit,
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
      loading={!data}
      placeholder={<div />}
      placeholderCount={placeholderCount}
    >
      {data.shows.map((show, index) => (
        <TraktItem key={`${show.id}-${index}`} {...show} />
      ))}
    </DataGrid>
  );
}
