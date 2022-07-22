import { Text } from '@mantine/core';
import ProductItem from '~/components/Products/ProductItem';
import TmdbPoster from '../Tmdb/TmdbPoster';
import { TraktShow } from './Trakt.types';

export default function TraktItem({
  id,
  traktUrl,
  title,
  posterConfig,
  posterId,
  year,
}: TraktShow & { posterConfig: any }) {
  return (
    <ProductItem
      key={id}
      label={
        <Text lineClamp={2} weight={500} size="lg">
          {title}
        </Text>
      }
      subLabel={
        <Text color="dimmed" lineClamp={2} weight={500} size="md">
          {year}
        </Text>
      }
      url={traktUrl}
      leadElement={<TmdbPoster posterId={posterId} posterConfig={posterConfig} />}
    />
  );
}
