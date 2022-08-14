import { Badge, Group, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { sortByAbc } from '~/utils';
import { Surface } from '../common';
import { stackBank } from './Stack.data';

export default function StackList() {
  const theme = useMantineTheme();
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
      {sortByAbc({ data: stackBank, key: 'name' }).map((item) => (
        <Surface.Container key={item.name}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block' }}
            >
              <Image
                src={item.logo}
                width={64}
                height={64}
                layout="fixed"
                alt={`${item.name} icon`}
              />
            </a>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: theme.spacing.xl,
              }}
            >
              <Text
                weight={500}
                size={theme.fontSizes.xl * 1.125}
                transform="capitalize"
              >
                {item.name}
              </Text>
              {item.tags && (
                <>
                  <Group spacing="md" style={{ marginTop: theme.spacing.xs / 2 }}>
                    {item.tags.map((tag) => (
                      <Badge
                        key={`${item.name}-tag-${tag}`}
                        size="sm"
                        variant="outline"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                </>
              )}
            </div>
          </div>
          {/* <Text size="md" weight={500} mt="md" ml="xs">
            {item.preview}
          </Text> */}
        </Surface.Container>
      ))}
    </SimpleGrid>
  );
}
