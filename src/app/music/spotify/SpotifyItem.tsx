import { Image, Text } from '@mantine/core';
import ProductItem from '~/components/Products/ProductItem';

interface SpotifyItemProps {
  image: string | null;
  label: string;
  subLabel: string;
  url: string;
}

export default function SpotifyItem({
  image,
  label,
  subLabel,
  url,
}: SpotifyItemProps) {
  return (
    <ProductItem
      label={
        <Text lineClamp={1} fw={600} size="md">
          {label}
        </Text>
      }
      subLabel={
        <Text c="dimmed" lineClamp={1}>
          {subLabel}
        </Text>
      }
      url={url}
      leadElement={
        <Image src={image} height={64} width={64} fit="contain" radius="sm" />
      }
    />
  );
}
