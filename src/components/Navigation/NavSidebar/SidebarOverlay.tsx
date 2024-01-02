/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Transition } from '@mantine/core';
import cx from 'clsx';
import { useContext } from 'react';
import { GlobalNavigationContext } from '~/components/Providers';
import classes from './Sidebar.module.css';

export default function SidebarOverlay() {
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);

  return (
    <Transition
      mounted={isOpen}
      transition="slide-right"
      duration={200}
      timingFunction="ease-in-out"
    >
      {(styles) => (
        <div
          className={cx(classes.overlay, {
            [classes.overlayOpened]: isOpen,
            [classes.overlayClosed]: !isOpen,
          })}
          style={styles}
          onClick={() => setIsOpen(false)}
        />
      )}
    </Transition>
  );
}
