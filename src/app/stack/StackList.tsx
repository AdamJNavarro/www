import { Badge, Group, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import { sortByAbc } from '~/utils';
import { stackItems } from './Stack.data';
import Navigation from '~/components/common/Navigation';

export default function StackList() {
  const theme = useMantineTheme();
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {sortByAbc({ data: stackItems, key: 'name' }).map((item) => {
        const { name, href, logo, tags } = item;
        return (
          <Navigation.Card key={name} href={href} isExternal>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image src={logo} width={56} height={56} alt={`${name} icon`} />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: theme.spacing.md,
                }}
              >
                <Text fw={500} size={theme.fontSizes.md}>
                  {name}
                </Text>
                {tags && (
                  <>
                    <Group gap="sm" mt={8}>
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
          </Navigation.Card>
        );
      })}
    </SimpleGrid>
  );
}
