import { createStyles } from '@mantine/core';
import { NextLink } from '@mantine/next';

export interface LinkElementProps {
  href: string;
  isExternal?: boolean;
  style?: any;
  className?: any;
  component?: any;
  children: any;
}

export function LinkElement({
  href,
  isExternal = false,
  style,
  className,
  component = 'a',
  children,
}: LinkElementProps) {
  const Element = component;

  if (isExternal) {
    return (
      <Element
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={style || undefined}
        className={className || undefined}
      >
        {children}
      </Element>
    );
  }

  return (
    <Element
      component={NextLink}
      legacyBehavior
      href={href}
      passHref
      style={style || undefined}
      className={className || undefined}
    >
      {children}
    </Element>
  );
}

export const linkStyles = createStyles((theme) => ({
  text: {
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
}));
