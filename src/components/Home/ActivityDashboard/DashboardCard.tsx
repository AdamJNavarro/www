import { Box, Group, Skeleton } from '@mantine/core';
import Image from 'next/image';
import { Book, ExternalLink } from 'tabler-icons-react';
import { Surface } from '~/components/common';
import { LinkText } from '~/components/common/Typography';

interface DashboardCardProps {
  href: string;
  label: string;
  loading: boolean;
  logo: string;
  children: any;
}

export default function DashboardCard({
  href,
  label,
  loading,
  logo,
  children,
}: DashboardCardProps) {
  return (
    <Skeleton visible={loading}>
      <Surface.Card style={{ display: 'flex', flexDirection: 'column' }}>
        <Group position="apart" mb="xs">
          <Group>
            <Image
              src={logo}
              width={32}
              height={32}
              layout="fixed"
              alt={`dashboard ${label} icon`}
            />

            <LinkText
              href={href}
              isExternal
              style={{ fontSize: 24, fontWeight: 700, textTransform: 'capitalize' }}
            >
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
            //marginLeft: theme.spacing.md,
          })}
        >
          {children}
        </Box>
      </Surface.Card>
    </Skeleton>
  );
}
