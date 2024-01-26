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
      component={Link}
      href={href}
      style={style || undefined}
      className={className || undefined}
    >
      {children}
    </Element>
  );
}
