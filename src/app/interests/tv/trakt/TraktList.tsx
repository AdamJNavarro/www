import { Text, SimpleGrid } from '@mantine/core';
import ProductItem from '~/components/Products/ProductItem';
import TraktPoster from './TraktPoster';

export default function TraktList({ data }) {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {data.map((show, index) => (
        <ProductItem
          key={`${show}-${index}`}
          label={
            <Text lineClamp={2} fw={500} size="lg">
              {show.title}
            </Text>
          }
          subLabel={
            <Text c="dimmed" lineClamp={2} fw={300} size="md">
              {show.year}
            </Text>
          }
          url={show.url}
          leadElement={
            <TraktPoster posterId={show.showIds.tmdb} title={show.title} />
          }
        />
      ))}
    </SimpleGrid>
  );
}
