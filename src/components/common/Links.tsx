import { createStyles } from '@mantine/core';
import Link from 'next/link';

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
  return (
    <Link href={href} passHref>
      <Element
        component="a"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        style={style || undefined}
        className={className || undefined}
      >
        {children}
      </Element>
    </Link>
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
