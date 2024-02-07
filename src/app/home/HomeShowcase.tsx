import { Box, Text } from '@mantine/core';
import { IconMoodHappy, IconSocial, IconStack2 } from '@tabler/icons-react';
import Image from 'next/image';
import NavGrid from '~/components/Navigation/NavGrid';
import { NavLinkProps } from '~/components/Navigation/Navigation.types';
import classes from './Showcase.module.css';

const items: NavLinkProps[] = [
  {
    icon: IconMoodHappy,
    label: 'Interests',
    href: '/interests',
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
      <Image
        src="/img/home-photo.jpg"
        priority
        height={300}
        width={300}
        alt="adam-home-photo"
        style={{
          borderRadius: '50%',
        }}
      />
      <Text className={classes.title}>Adam Navarro</Text>
      <Text c="dimmed" className={classes.motto}>
        Find Passion. Foster Passion.
      </Text>
      <NavGrid items={items} />
    </Box>
  );
}
