import { createStyles, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import {
  Code,
  Home2,
  UserCircle,
  BrandGithub,
  BrandInstagram,
  BrandTwitter,
  Mail,
  Social,
} from 'tabler-icons-react';
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
          icon: Home2,
          label: 'Home',
          href: '/',
          isActive: router.asPath === '/',
          isExternal: false,
        },
        {
          icon: Code,
          label: 'Coding',
          href: '/coding',
          isActive: router.asPath.indexOf('/coding') >= 0,
          isExternal: false,
        },
        {
          icon: UserCircle,
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
          icon: BrandGithub,
          label: 'Github',
          href: 'https://github.com/AdamJNavarro',
          isActive: false,
          isExternal: true,
        },
        {
          icon: BrandInstagram,
          label: 'Instagram',
          href: 'https://www.instagram.com/adamjnavarro',
          isActive: false,
          isExternal: true,
        },
        {
          icon: BrandTwitter,
          label: 'Twitter',
          href: 'https://twitter.com/AdamJNavarro',
          isActive: false,
          isExternal: true,
        },
        {
          icon: Mail,
          label: 'Email',
          href: 'mailto:adamjnav@gmail.com',
          isActive: false,
          isExternal: true,
        },
        {
          icon: Social,
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
