import { Avatar, Box, Text } from '@mantine/core';
import { MoodHappy, Social, Tools } from 'tabler-icons-react';
import NavGrid from '../Navigation/NavGrid';
import { NavLinkProps } from '../Navigation/Navigation.types';

const items: NavLinkProps[] = [
  {
    icon: Tools,
    label: 'Projects',
    href: '/coding#projects',
    isExternal: false,
  },
  {
    icon: MoodHappy,
    label: 'Interests',
    href: '/about#interests',
    isExternal: false,
  },
  {
    icon: Social,
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
          fontSize: theme.fontSizes.xl * 1.5,
          marginTop: theme.spacing.xl * 1.5,
          marginBottom: -theme.spacing.xs / 1.5,
        })}
      >
        Adam Navarro
      </Text>
      <Text
        color="dimmed"
        sx={(theme) => ({
          fontSize: theme.fontSizes.xl,
          marginBottom: theme.spacing.xl * 2,
        })}
      >
        Find Passion. Foster Passion.
      </Text>
      <NavGrid items={items} />
    </Box>
  );
}
