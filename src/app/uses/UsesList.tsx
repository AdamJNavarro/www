import { Badge, Flex, Group, SimpleGrid, Text } from '@mantine/core';
import Image from 'next/image';
import { getLogoPath, sortByAbc } from '~/utils';
import { UsesItem } from './uses.data';
import Navigation from '~/components/common/Navigation';

export default function UsesList({ items }: { items: UsesItem[] }) {
  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {sortByAbc({ data: items, key: 'name' }).map((item) => {
        const { name, details, href, logo, tags } = item;
        return (
          <Navigation.Card key={name} href={href} isExternal>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image
                src={logo || getLogoPath(name)}
                width={56}
                height={56}
                alt={`${name} icon`}
              />
              <Flex direction="column" ml="md">
                <Text fw={500} fz="md">
                  {name}
                </Text>
                <Text fz="xs">{details}</Text>
                {tags && (
                  <>
                    <Group gap="sm" mt={8}>
                      {tags.map((tag) => (
                        <Badge
                          key={`${name}-tag-${tag}`}
                          //size="xs"
                          variant="outline"
                          style={{ textTransform: 'none', fontSize: 10, height: 16 }}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </Group>
                  </>
                )}
              </Flex>
            </div>
          </Navigation.Card>
        );
      })}
    </SimpleGrid>
  );
}
