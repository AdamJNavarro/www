import { Text, Image } from '@mantine/core';
import ProductItem from '~/components/Products/ProductItem';
import { buildLiteralUrl } from '~/lib/literal';
import { LiteralReadingState } from '~/lib/literal/literal.types';
import { buildNamesString } from '~/utils';

type LiteralItemProps = LiteralReadingState & { children?: any };

export default function LiteralItem({ book, children }: LiteralItemProps) {
  const { authors, cover, slug, title } = book;
  return (
    <ProductItem
      label={
        <Text lineClamp={2} fw={500} size="md" mb={-2}>
          {title}
        </Text>
      }
      subLabel={
        <Text c="dimmed" lineClamp={2} fw={500} size="sm">
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
