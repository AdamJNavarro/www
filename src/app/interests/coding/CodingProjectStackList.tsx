import { Box, SimpleGrid, Text } from '@mantine/core';
import Image from 'next/image';
import Navigation from '~/components/common/Navigation';
import { codingFrameworkItems, codingServicesItems } from './coding.data';
import { getLogoPath } from '~/utils';

export default function CodingProjectStackList({ project }: any) {
  const frameworks = codingFrameworkItems.filter((obj) =>
    project.stack.frameworks.includes(obj.name)
  );
  const services = codingServicesItems.filter((obj) =>
    project.stack.services.includes(obj.name)
  );

  return (
    <SimpleGrid
      cols={{ base: 1, md: 2 }}
      spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
    >
      {[...frameworks, ...services].map((item) => {
        const { name, href, logo } = item;
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
              <Box display="flex" ml="md">
                <Text fw={500} fz="md">
                  {name}
                </Text>
              </Box>
            </div>
          </Navigation.Card>
        );
      })}
    </SimpleGrid>
  );
}
