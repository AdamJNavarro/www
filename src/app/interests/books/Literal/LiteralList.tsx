import { Image, Text, SimpleGrid } from '@mantine/core';
import { getLiteralBooksByStatus, LiteralStatus } from '~/app/data/literal';
import ProductItem from '~/components/Products/ProductItem';

interface LiteralListProps {
  readingStatus: LiteralStatus;
  itemLimit: number;
}

export default function LiteralList({ readingStatus, itemLimit }: LiteralListProps) {
  const books = getLiteralBooksByStatus(readingStatus, itemLimit);

  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {books.map((entry) => (
        <ProductItem
          key={entry.id}
          label={
            <Text lineClamp={2} fw={500} size="md" mb={-2}>
              {entry.title}
            </Text>
          }
          subLabel={
            <Text c="dimmed" lineClamp={2} fw={500} size="sm">
              {entry.authors}
            </Text>
          }
          url={entry.url}
          leadElement={
            <Image
              src={entry.cover}
              height={64 * 1.5}
              width={64}
              fit="contain"
              radius="sm"
            />
          }
        />
      ))}
    </SimpleGrid>
  );
}
