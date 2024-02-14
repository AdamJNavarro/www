import TraktItem from './TraktItem';
import { DataGrid } from '~/components/common/Grid';

export default function TraktList({ data }) {
  return (
    <DataGrid
      config={{
        cols: { base: 1, md: 2 },
        spacing: { base: 'md', sm: 'lg', lg: 'xl' },
      }}
      error={undefined}
      loading={!data}
      placeholder={<div />}
      placeholderCount={4}
    >
      {data.map((show, index) => (
        <TraktItem key={`${show.title}-${index}`} {...show} />
      ))}
    </DataGrid>
  );
}
