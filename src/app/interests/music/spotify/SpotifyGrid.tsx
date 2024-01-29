import { DataGrid, DataGridProps } from '~/components/common/Grid';
import SpotifyItem from './SpotifyItem';

export default function SpotifyGrid(props: DataGridProps) {
  return (
    <DataGrid
      config={{
        cols: { base: 1, md: 2 },
        spacing: { base: 'md', sm: 'lg', lg: 'xl' },
      }}
      placeholder={<SpotifyItem image="" label="X" subLabel="x" url="/" />}
      {...props}
    />
  );
}
