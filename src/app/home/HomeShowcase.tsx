import { Box, Text } from '@mantine/core';
import Image from 'next/image';
import classes from './Showcase.module.css';
import routes from '../config/routes';
import Navigation from '~/components/common/Navigation';

const items = [routes.interests, routes.stack, routes.social];

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
      <Navigation.Grid items={items} />
    </Box>
  );
}
