/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import cx from 'clsx';
import { IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';
import { GlobalNavigationContext } from '../Providers';
import { SidebarLinkProps } from './Navigation.types';
import classes from './NavigationLinks.module.css';

function SidebarLink({
  icon: Icon,
  label,
  href,
  isActive,
  isExternal,
}: SidebarLinkProps) {
  const { setIsOpen } = useContext(GlobalNavigationContext);

  return (
    <Link
      href={href}
      onClick={() => {
        setIsOpen(false);
      }}
      className={classes.link}
      data-active={isActive}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <Icon className={classes.icon} />
      <span style={{ flex: 1 }}>{label}</span>
      {isExternal && (
        <span className={classes.trailingIcon}>
          <IconExternalLink />
        </span>
      )}
    </Link>
  );
}

export { SidebarLink };
