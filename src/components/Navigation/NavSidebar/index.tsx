import React, { useRef } from 'react';
import cx from 'clsx';
import SidebarContents from './SidebarContents';
import { GlobalNavigationContext } from '~/components/Providers';
import TitleBar from '../TitleBar';
import SidebarOverlay from './SidebarOverlay';
import classes from './Sidebar.module.css';

export default function NavSidebar() {
  const scrollRef = useRef(null);

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
