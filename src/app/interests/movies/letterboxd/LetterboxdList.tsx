import { SimpleGrid, Text } from '@mantine/core';
import Image from 'next/image';

import ProductItem from '~/components/Products/ProductItem';

export default function LetterboxdList({ data }: any) {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {data.map((entry) => (
        <ProductItem
          key={`${entry.name}-${entry.year}`}
          label={
            <Text lineClamp={1} fw={500} size="lg">
              {entry.name}
            </Text>
          }
          subLabel={
            <Text c="dimmed" fw={300} size="md">
              {entry.year}
            </Text>
          }
          url={entry.url}
          leadElement={
            <div
              style={{
                width: 64,
                height: 64 * 1.5,
                position: 'relative',
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${entry.posterPath}`}
                fill
                alt={`${entry.name}-poster`}
              />
            </div>
          }
        />
      ))}
    </SimpleGrid>
  );
}
