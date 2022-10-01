import { Text, Image } from '@mantine/core';
import ProductItem from '~/components/Products/ProductItem';
import { buildNamesString } from '~/utils';

import { LiteralReadingState } from './Literal.types';
import { buildLiteralUrl } from './Literal.utils';

type LiteralItemProps = LiteralReadingState & { children?: any };

export default function LiteralItem({ book, children }: LiteralItemProps) {
  const { authors, cover, slug, title } = book;
  return (
    <ProductItem
      label={
        <Text lineClamp={2} weight={500} size="lg">
          {title}
        </Text>
      }
      subLabel={
        <Text color="dimmed" lineClamp={2} weight={500} size="md">
          {buildNamesString(authors, 'name')}
        </Text>
      }
      url={buildLiteralUrl(slug)}
      leadElement={
        <Image src={cover} height={64 * 1.5} width={64} fit="contain" radius="sm" />
      }
    >
      {children}
    </ProductItem>
  );
}
