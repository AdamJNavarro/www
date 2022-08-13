import { Badge, Group, Image, SimpleGrid, Text } from '@mantine/core';
import ProductItem from '../Products/ProductItem';
import { stackBank } from './Stack.data';

export default function StackList() {
  return (
    <SimpleGrid
      cols={2}
      spacing="xl"
      breakpoints={[
        { maxWidth: 'xl', cols: 2, spacing: 'xl' },
        { maxWidth: 'lg', cols: 2, spacing: 'xl' },
        { maxWidth: 'md', cols: 2, spacing: 'lg' },
        { maxWidth: 'sm', cols: 1, spacing: 'lg' },
        { maxWidth: 'xs', cols: 1, spacing: 'md' },
      ]}
    >
      {stackBank.map((item) => (
        <ProductItem
          key={item.name}
          label={
            <Text lineClamp={1} weight={600} size="md" transform="capitalize">
              {item.name}
            </Text>
          }
          subLabel={
            <Text color="dimmed" lineClamp={1}>
              {item.preview}
            </Text>
          }
          url={item.href}
          leadElement={
            <Image
              src={item.logo}
              height={80}
              width={80}
              fit="contain"
              radius="sm"
            />
          }
        >
          <Group spacing="md" mt="xs">
            {item.tags.map((tag) => (
              <Badge size="sm" variant="outline">
                {tag}
              </Badge>
            ))}
          </Group>
        </ProductItem>
      ))}
    </SimpleGrid>
  );
}
