import { Text } from '@mantine/core';
import { usePathname } from 'next/navigation';
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
import classes from './Sidebar.module.css';

export default function SidebarContents() {
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
