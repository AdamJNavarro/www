import { Box, Group, Skeleton, Text } from '@mantine/core';
import Image from 'next/image';
import classes from './Dashboard.module.css';
import Navigation from '~/components/common/Navigation';
import { Surface } from '~/components/common';

interface DashboardCardProps {
  href: string;
  label: string;
  logo: string;
  children: any;
}

const logoSize = 36;

function Card({ href, label, logo, children }: DashboardCardProps) {
  return (
    <Navigation.Card href={href} isExternal>
      <Group justify="space-between" mb="sm">
        <Group>
          <Image
            src={logo}
            width={logoSize}
            height={logoSize}
            alt={`dashboard ${label} icon`}
          />

          <Text className={classes.label}>{label}</Text>
        </Group>
      </Group>

      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </Navigation.Card>
  );
}

function Title(props) {
  return <Text className={classes.title} {...props} />;
}

function Details(props) {
  return <Text className={classes.details} {...props} />;
}

function Loading() {
  return (
    <Skeleton radius="md">
      <Surface.Card>
        <Group justify="space-between" mb="sm">
          <Group>
            <Box w={logoSize} h={logoSize} />

            <Text className={classes.label}>Label</Text>
          </Group>
        </Group>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Dashboard.Title>Loading</Dashboard.Title>
          <Dashboard.Details>Content</Dashboard.Details>
        </Box>
      </Surface.Card>
    </Skeleton>
  );
}

const Dashboard = {
  Card,
  Title,
  Details,
  Loading,
};

export default Dashboard;
