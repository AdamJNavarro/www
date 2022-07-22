import { Text, Image } from '@mantine/core';
import ProductItem from '~/components/Products/ProductItem';

import { LiteralReadingState } from './Literal.types';

const LITERAL_BOOK_ENDPOINT = 'https://literal.club/book';

type LiteralItemProps = LiteralReadingState & { children?: any };

export default function LiteralItem({ id, book, children }: LiteralItemProps) {
  const { authors, cover, slug, title } = book;
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
          {authors.map((_artist: any) => _artist.name).join(', ')}
        </Text>
      }
      url={`${LITERAL_BOOK_ENDPOINT}/${slug}`}
      leadElement={
        <Image src={cover} height={64 * 1.5} width={64} fit="contain" radius="sm" />
      }
    >
      {children}
    </ProductItem>
  );
}
