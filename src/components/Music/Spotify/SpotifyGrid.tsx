import { DataGrid, DataGridProps } from '~/components/common/Grid';
import SpotifyItem from './SpotifyItem';

export default function SpotifyGrid(props: DataGridProps) {
  return (
    <DataGrid
      config={{
        cols: 2,
        spacing: 'xl',
        breakpoints: [
          { maxWidth: 'xl', cols: 2, spacing: 'xl' },
          { maxWidth: 'lg', cols: 2, spacing: 'xl' },
          { maxWidth: 'md', cols: 2, spacing: 'lg' },
          { maxWidth: 'sm', cols: 1, spacing: 'lg' },
          { maxWidth: 'xs', cols: 1, spacing: 'md' },
        ],
      }}
      placeholder={<SpotifyItem image={null} label="X" subLabel="x" url="/" />}
      {...props}
    />
  );
}
