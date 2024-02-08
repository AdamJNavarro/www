import { Box, SimpleGrid, Text } from '@mantine/core';
import Image from 'next/image';
import Navigation from '~/components/common/Navigation';
import { codingStack } from './coding.data';

export default function CodingProjectStackList({ project }: any) {
  const items = codingStack.filter((obj) => project.stack.includes(obj.id));

  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {items.map((item) => {
        const { id, href, logo } = item;
        return (
          <Navigation.Card key={id} href={href} isExternal>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Image src={logo} width={56} height={56} alt={`${id} icon`} />
              <Box display="flex" ml="md">
                <Text fw={500} fz="md">
                  {id}
                </Text>
              </Box>
            </div>
          </Navigation.Card>
        );
      })}
    </SimpleGrid>
  );
}
