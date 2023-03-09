import { Avatar, Box, Text } from '@mantine/core';
import { IconMoodHappy, IconSocial, IconStack2 } from '@tabler/icons-react';
import NavGrid from '../Navigation/NavGrid';
import { NavLinkProps } from '../Navigation/Navigation.types';

const items: NavLinkProps[] = [
  {
    icon: IconMoodHappy,
    label: 'Interests',
    href: '/about#interests',
    isExternal: false,
  },
  {
    icon: IconStack2,
    label: 'Stack',
    href: '/stack',
    isExternal: false,
  },
  {
    icon: IconSocial,
    label: 'Social',
    href: '/social',
    isExternal: false,
  },
];

export default function HomeShowcase() {
  return (
    <Box
      sx={(theme) => ({
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        width: '75%',
        [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
          width: '100%',
        },
      })}
    >
      <Avatar src="/img/home-photo.jpg" radius={192 / 2} size={192} mx="auto" />
      <Text
        sx={(theme) => ({
          fontSize: `calc(${theme.spacing.xl} * 1.5)`,
          marginTop: `calc(${theme.spacing.xl} * 1.5)`,
          marginBottom: `calc(calc(${theme.spacing.xl} / 1.5) * -1)`,
        })}
      >
        Adam Navarro
      </Text>
      <Text
        color="dimmed"
        sx={(theme) => ({
          fontSize: theme.fontSizes.xl,
          marginBottom: `calc(${theme.spacing.xl} * 2)`,
        })}
      >
        Find Passion. Foster Passion.
      </Text>
      <NavGrid items={items} />
    </Box>
  );
}
