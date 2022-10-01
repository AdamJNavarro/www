import { Box, createStyles, Group, Skeleton, Text } from '@mantine/core';
import Image from 'next/image';
import { ExternalLink } from 'tabler-icons-react';
import { Surface } from '~/components/common';
import { LinkText } from '~/components/common/Typography';

const useStyles = createStyles((theme) => ({
  label: {
    fontSize: theme.fontSizes.xl,
    fontWeight: 400,
    color: theme.colors.gray[2],
  },

  title: {
    fontSize: theme.fontSizes.lg,
    color: theme.colors.gray[4],
  },

  details: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.gray[5],
  },
}));

interface DashboardCardProps {
  href: string;
  label: string;
  loading: boolean;
  logo: string;
  children: any;
}

function Card({ href, label, loading, logo, children }: DashboardCardProps) {
  const { classes } = useStyles();

  return (
    <Skeleton visible={loading}>
      <Surface.Card style={{ display: 'flex', flexDirection: 'column' }}>
        <Group position="apart" mb="sm">
          <Group>
            <Image
              src={logo}
              width={26}
              height={26}
              layout="fixed"
              alt={`dashboard ${label} icon`}
            />

            <LinkText href={href} isExternal className={classes.label}>
              {label}
            </LinkText>
          </Group>
          <ExternalLink size={20} />
        </Group>

        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          })}
        >
          {children}
        </Box>
      </Surface.Card>
    </Skeleton>
  );
}

function Title(props) {
  const { classes } = useStyles();
  return <Text className={classes.title} {...props} />;
}

function Details(props) {
  const { classes } = useStyles();
  return <Text className={classes.details} {...props} />;
}

const Dashboard = {
  Card,
  Title,
  Details,
};

export default Dashboard;
