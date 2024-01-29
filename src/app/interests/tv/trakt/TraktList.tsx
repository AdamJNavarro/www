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
        cols: { base: 1, md: 2 },
        spacing: { base: 'md', sm: 'lg', lg: 'xl' },
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
