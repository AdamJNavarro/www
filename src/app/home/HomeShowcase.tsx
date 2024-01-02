import { Avatar, Box, Text } from '@mantine/core';
import { IconMoodHappy, IconSocial, IconStack2 } from '@tabler/icons-react';
import NavGrid from '~/components/Navigation/NavGrid';
import { NavLinkProps } from '~/components/Navigation/Navigation.types';
import classes from './Showcase.module.css';

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
    <Box className={classes.container}>
      <Avatar src="/img/home-photo.jpg" radius={192 / 2} size={192} mx="auto" />
      <Text className={classes.title}>Adam Navarro</Text>
      <Text c="dimmed" className={classes.motto}>
        Find Passion. Foster Passion.
      </Text>
      <NavGrid items={items} />
    </Box>
  );
}
