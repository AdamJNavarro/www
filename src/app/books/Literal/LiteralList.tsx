import { SimpleGrid } from '@mantine/core';

export default function LiteralList({ children }: any) {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {children}
    </SimpleGrid>
  );
}
