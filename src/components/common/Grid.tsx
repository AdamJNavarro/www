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
  error?: string | ApolloError | Error;
  loading: boolean;
  placeholder?: any;
  placeholderCount: number;
  children: any;
}

export function DataGrid({ ...props }: DataGridProps) {
  const { children, config, loading, error, placeholder, placeholderCount } = props;

  const placeholders = Array.from(Array(placeholderCount).keys()).map((holder) => (
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

  return <SimpleGrid {...config}>{loading ? placeholders : children}</SimpleGrid>;
}
