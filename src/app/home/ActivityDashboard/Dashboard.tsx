import { Box, Group, Skeleton, Text } from '@mantine/core';
import Image from 'next/image';
import classes from './Dashboard.module.css';
import Navigation from '~/components/common/Navigation';

interface DashboardCardProps {
  href: string;
  label: string;
  loading: boolean;
  logo: string;
  children: any;
}

function Card({ href, label, loading, logo, children }: DashboardCardProps) {
  return (
    <Skeleton visible={loading}>
      <Navigation.Card href={href} isExternal>
        <Group justify="space-between" mb="sm">
          <Group>
            <Image
              src={logo}
              width={26}
              height={26}
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
    </Skeleton>
  );
}

function Title(props) {
  return <Text className={classes.title} {...props} />;
}

function Details(props) {
  return <Text className={classes.details} {...props} />;
}

const Dashboard = {
  Card,
  Title,
  Details,
};

export default Dashboard;
