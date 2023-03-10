import { Badge, Group, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import Image from 'next/legacy/image';
import { sortByAbc } from '~/utils';
import { Surface } from '../common';
import { LinkElement } from '../common/Links';
import { stackItems } from './Stack.data';

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
      {sortByAbc({ data: stackItems, key: 'name' }).map((item) => {
        const { name, href, logo, tags } = item;
        return (
          <LinkElement
            key={name}
            component={Surface.HoverCard}
            href={href}
            isExternal
            style={{ display: 'flex' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src={logo}
                width={56}
                height={56}
                layout="fixed"
                alt={`${name} icon`}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: theme.spacing.md,
                }}
              >
                <Text weight={500} size={theme.fontSizes.lg}>
                  {name}
                </Text>
                {tags && (
                  <>
                    <Group
                      spacing="sm"
                      sx={() => ({
                        marginTop: `calc(${theme.spacing.xs} / 2)`,
                      })}
                    >
                      {tags.map((tag) => (
                        <Badge
                          key={`${name}-tag-${tag}`}
                          size="xs"
                          variant="outline"
                          style={{ textTransform: 'none' }}
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
              {preview}
            </Text> */}
          </LinkElement>
        );
      })}
    </SimpleGrid>
  );
}
