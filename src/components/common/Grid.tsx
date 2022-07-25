import { ApolloError } from '@apollo/client';
import {
  MantineNumberSize,
  SimpleGrid,
  SimpleGridBreakpoint,
  Skeleton,
} from '@mantine/core';
import { AlertBanner } from './Feedback';

interface SimpleGridConfig {
  breakpoints: SimpleGridBreakpoint[];
  cols: number;
  spacing: MantineNumberSize;
}

export interface DataGridProps {
  config?: SimpleGridConfig;
  error: string | ApolloError | any;
  loading: boolean;
  placeholder?: any;
  placeholderCount: number;
  children: any;
}

function GridLoading({ config, placeholder, placeholderCount }: DataGridProps) {
  const placeholders = Array.from(Array(placeholderCount).keys());

  return (
    <SimpleGrid {...config}>
      {placeholders.map((holder) => (
        <Skeleton key={holder} radius="md">
          {placeholder}
        </Skeleton>
      ))}
    </SimpleGrid>
  );
}

export function DataGrid({ ...props }: DataGridProps) {
  const { children, config, loading, error, placeholder, placeholderCount } = props;

  //if (loading) return <GridLoading {...props} />;

  const placeholders = Array.from(Array(placeholderCount).keys());

  const placers = placeholders.map((holder) => (
    <Skeleton key={holder} radius="md">
      {placeholder}
    </Skeleton>
  ));

  if (error) {
    return (
      <AlertBanner mode="error" title="An Error Occurred">
        There was a problem fetching the data. Sorry about that!
      </AlertBanner>
    );
  }

  return <SimpleGrid {...config}>{loading ? placers : children}</SimpleGrid>;
}
