/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { createStyles, Transition } from '@mantine/core';
import { useContext } from 'react';
import { GlobalNavigationContext } from '~/components/Providers';

const useStyles = createStyles(() => ({
  overlay: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    zIndex: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  opened: {
    opacity: 1,
    pointerEvents: 'auto',
  },

  closed: {
    opacity: 0,
    pointerEvents: 'none',
  },
}));

export default function SidebarOverlay() {
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);

  const { classes, cx } = useStyles();

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
            [classes.opened]: isOpen,
            [classes.closed]: !isOpen,
          })}
          style={styles}
          onClick={() => setIsOpen(false)}
        />
      )}
    </Transition>
  );
}
