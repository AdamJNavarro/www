'use client';

import {
  AppShell,
  Box,
  Burger,
  Group,
  ScrollArea,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ApolloProvider } from '@apollo/client';
import classes from '../common/Navigation.module.css';
import { client } from '~/app/data/apollo';
import { navbarRoutes } from '~/app/config/routes';

function useActivePath(): (href: string) => boolean {
  const pathname = usePathname();
  const checkActivePath = (href: string) => {
    if (!pathname) return false;
    if (href === '/' && pathname !== href) {
      return false;
    }
    return pathname.startsWith(href);
  };

  return checkActivePath;
}

function useActiveRouteLabel(): string {
  const pathname = usePathname();
  if (!pathname) return '';
  if (pathname === '/') return 'Adam Navarro';
  return pathname?.substring(pathname.lastIndexOf('/') + 1);
}

export default function Shell({ children }: any) {
  const theme = useMantineTheme();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure();

  const headerTitle = useActiveRouteLabel();
  const checkActivePath = useActivePath();

  return (
    <ApolloProvider client={client}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 250,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
        transitionDuration={200}
        transitionTimingFunction="ease"
        styles={{
          navbar: {
            backgroundColor: theme.other.colors.shellSurfaces,
          },
          header: {
            backgroundColor: theme.other.colors.shellSurfaces,
          },
        }}
      >
        <AppShell.Header>
          <Group h="100%" px="md" justify="space-between">
            <Group>
              <Burger
                opened={mobileOpened}
                onClick={toggleMobile}
                hiddenFrom="sm"
                size="sm"
                transitionDuration={200}
              />
              <Burger
                opened={desktopOpened}
                onClick={toggleDesktop}
                visibleFrom="sm"
                size="sm"
                transitionDuration={200}
              />
              <Text fw={800} size="md" td="none" visibleFrom="sm">
                Adam Navarro
              </Text>
              <Text fw={800} size="md" tt="capitalize" hiddenFrom="sm">
                {headerTitle}
              </Text>
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar px="xs" py="md">
          <AppShell.Section grow component={ScrollArea} scrollbarSize="0.2rem">
            <Box mr="xl">
              {navbarRoutes.map((item) => {
                const isActive = checkActivePath(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      toggleMobile();
                    }}
                    className={classes.navbarLink}
                    data-active={isActive || undefined}
                  >
                    <item.icon className={classes.navbarIcon} />
                    <span style={{ flex: 1 }}>{item.label}</span>
                  </Link>
                );
              })}
            </Box>
          </AppShell.Section>
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </ApolloProvider>
  );
}
