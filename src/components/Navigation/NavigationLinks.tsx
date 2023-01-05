/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { createStyles } from '@mantine/core';
import { ExternalLink } from 'tabler-icons-react';
import Link from 'next/link';
import { GlobalNavigationContext } from '../Providers';
import { SidebarLinkProps } from './Navigation.types';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.md,
      color:
        theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px`,
      marginTop: theme.spacing.xs,
      borderRadius: theme.radius.md,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === 'dark'
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 7],
        },
      },
    },

    trailingIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1rem',
    },
  };
});

function SidebarLink({
  icon: Icon,
  label,
  href,
  isActive,
  isExternal,
}: SidebarLinkProps) {
  const { classes, cx } = useStyles();
  const { setIsOpen } = useContext(GlobalNavigationContext);

  return (
    <Link
      legacyBehavior
      href={href}
      passHref
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <a
        className={cx(classes.link, {
          [classes.linkActive]: isActive,
        })}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        <Icon className={classes.linkIcon} />
        <span style={{ flex: 1 }}>{label}</span>
        {isExternal && (
          <span className={classes.trailingIcon}>
            <ExternalLink />
          </span>
        )}
      </a>
    </Link>
  );
}

export { SidebarLink };
