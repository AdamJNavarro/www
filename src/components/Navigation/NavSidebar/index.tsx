import React, { useRef } from 'react';
import { createStyles } from '@mantine/core';
import SidebarContents from './SidebarContents';
import { GlobalNavigationContext } from '~/components/Providers';
import TitleBar from '../TitleBar';
import SidebarOverlay from './SidebarOverlay';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    zIndex: 30,
    display: 'flex',
    flex: 'none',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh',
    maxHeight: '100vh',
    width: '15rem',
    overflowY: 'auto',
    paddingBottom: '2.5rem',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    transitionProperty: 'transform',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: '200ms',
    [theme.fn.largerThan('lg')]: {
      position: 'relative',
      zIndex: 'auto',
      transform: 'translateX(0px)',
    },
    [`@media (max-width: ${theme.breakpoints.lg})`]: {
      width: '14rem',
    },
    [`@media (max-width: ${theme.breakpoints.md})`]: {
      width: '33%',
    },
    [`@media (max-width: ${theme.breakpoints.sm})`]: {
      width: '50%',
      paddingBottom: 0,
    },
    [`@media (max-width: ${theme.breakpoints.xs})`]: {
      width: '75%',
      paddingBottom: 0,
    },
  },

  opened: {
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    transform: 'translateX(0px)',
  },

  closed: {
    position: 'absolute',
    transform: 'translateX(-100%)',
  },
}));

export default function NavSidebar() {
  const scrollRef = useRef(null);
  const { classes, cx } = useStyles();

  const { isOpen } = React.useContext(GlobalNavigationContext);

  return (
    <>
      <nav
        ref={scrollRef}
        className={cx(classes.navbar, {
          [classes.opened]: isOpen,
          [classes.closed]: !isOpen,
        })}
      >
        <TitleBar title="Adam Navarro" />
        <SidebarContents />
      </nav>
      <SidebarOverlay />
    </>
  );
}
