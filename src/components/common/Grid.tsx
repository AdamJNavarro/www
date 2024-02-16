import { ApolloError } from '@apollo/client';
import { SimpleGrid, Skeleton } from '@mantine/core';

interface SimpleGridConfig {
  cols: any;
  spacing: any;
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
    return <p>An error occurred.</p>;
  }

  return <SimpleGrid {...config}>{loading ? placeholders : children}</SimpleGrid>;
}
