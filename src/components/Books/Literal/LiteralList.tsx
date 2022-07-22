import { SimpleGrid } from '@mantine/core';

export default function LiteralList({ children }: any) {
  return (
    <SimpleGrid
      cols={2}
      spacing="xl"
      breakpoints={[
        { maxWidth: 'xl', cols: 2, spacing: 'xl' },
        { maxWidth: 'lg', cols: 2, spacing: 'lg' },
        { maxWidth: 'md', cols: 2, spacing: 'md' },
        { maxWidth: 'sm', cols: 1, spacing: 'xl' },
        { maxWidth: 'xs', cols: 1, spacing: 'xl' },
      ]}
    >
      {children}
    </SimpleGrid>
  );
}
