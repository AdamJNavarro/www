import { createStyles, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import {
  IconCode,
  IconHome2,
  IconUserCircle,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
  IconSocial,
} from '@tabler/icons-react';
import { SidebarSectionProps } from '../Navigation.types';
import { SidebarLink } from '../NavigationLinks';

const useStyles = createStyles((theme) => ({
  container: {
    flex: 1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
  },

  sectionLabel: {
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xs,
    paddingLeft: theme.spacing.xs,
    paddingRight: theme.spacing.xs,
  },
}));

export default function SidebarContents() {
  const { classes } = useStyles();
  const router = useRouter();

  const sections: SidebarSectionProps[] = [
    {
      label: null,
      items: [
        {
          icon: IconHome2,
          label: 'Home',
          href: '/',
          isActive: router.asPath === '/',
          isExternal: false,
        },
        {
          icon: IconCode,
          label: 'Coding',
          href: '/coding',
          isActive: router.asPath.indexOf('/coding') >= 0,
          isExternal: false,
        },
        {
          icon: IconUserCircle,
          label: 'About',
          href: '/about',
          isActive: router.asPath.indexOf('/about') >= 0,
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
          isActive: router.asPath.indexOf('/social') >= 0,
          isExternal: false,
        },
      ],
    },
  ];

  return (
    <div className={classes.container}>
      {sections.map((section, i) => {
        const { label, items } = section;
        return (
          <div key={i}>
            {label && (
              <Text key={i} className={classes.sectionLabel}>
                {label}
              </Text>
            )}
            {items.map((item) => (
              <SidebarLink key={item.label} {...item} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
