import { AppShell, Box, Burger, Group, ScrollArea, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconCode,
  IconExternalLink,
  IconHome2,
  IconUserCircle,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
  IconSocial,
} from '@tabler/icons-react';
import { SidebarSectionProps } from '../Navigation/Navigation.types';
import classes from '../Navigation/NavigationLinks.module.css';

export default function Shell({ children }: any) {
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] =
    useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop, close: closeDesktop }] =
    useDisclosure();

  const pathName = usePathname();

  const sections: SidebarSectionProps[] = [
    {
      label: null,
      items: [
        {
          icon: IconHome2,
          label: 'Home',
          href: '/',
          isActive: pathName === '/',
          isExternal: false,
        },
        {
          icon: IconCode,
          label: 'Coding',
          href: '/coding',
          isActive: pathName != null && pathName.indexOf('/coding') >= 0,
          isExternal: false,
        },
        {
          icon: IconUserCircle,
          label: 'About',
          href: '/about',
          isActive: pathName != null && pathName.indexOf('/about') >= 0,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Social',
      items: [
        {
          icon: IconBrandGithub,
          label: 'Github',
          href: 'https://github.com/AdamJNavarro',
          isActive: false,
          isExternal: true,
        },
        {
          icon: IconBrandInstagram,
          label: 'Instagram',
          href: 'https://www.instagram.com/adamjnavarro',
          isActive: false,
          isExternal: true,
        },
        {
          icon: IconBrandTwitter,
          label: 'Twitter',
          href: 'https://twitter.com/AdamJNavarro',
          isActive: false,
          isExternal: true,
        },
        {
          icon: IconMail,
          label: 'Email',
          href: 'mailto:adamjnav@gmail.com',
          isActive: false,
          isExternal: true,
        },
        {
          icon: IconSocial,
          label: 'All Platforms',
          href: '/social',
          isActive: pathName != null && pathName.indexOf('/social') >= 0,
          isExternal: false,
        },
      ],
    },
  ];

  return (
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
    >
      <AppShell.Header>
        <Group h="100%" px="md">
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
          <Text fw={800} size="md" td="none">
            Adam Navarro
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar px="xs" py="md">
        <AppShell.Section grow component={ScrollArea} scrollbarSize="0.2rem">
          <Box mr="xl">
            {sections.map((section, i) => {
              const { label, items } = section;
              return (
                <div key={i}>
                  {label && (
                    <Text key={i} size="md" fw={600} px="xs" mt="xl">
                      {label}
                    </Text>
                  )}
                  {items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        toggleMobile();
                      }}
                      className={classes.link}
                      data-active={item.isActive || undefined}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    >
                      <item.icon className={classes.icon} />
                      <span style={{ flex: 1 }}>{item.label}</span>
                      {item.isExternal && (
                        <span className={classes.externalIcon}>
                          <IconExternalLink size={20} />
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              );
            })}
          </Box>
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
