import { Text } from '@mantine/core';
import ProductItem from '~/components/Products/ProductItem';
import TraktPoster from './TraktPoster';
import { TraktShow } from '~/app/data/trakt/trakt.types';

export default function TraktItem({ traktUrl, title, posterId, year }: TraktShow) {
  return (
    <ProductItem
      label={
        <Text lineClamp={2} fw={500} size="lg">
          {title}
        </Text>
      }
      subLabel={
        <Text c="dimmed" lineClamp={2} fw={300} size="md">
          {year}
        </Text>
      }
      url={traktUrl}
      leadElement={<TraktPoster posterId={posterId} title={title} />}
    />
  );
}
