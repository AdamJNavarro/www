import { createStyles, Text, TypographyStylesProvider } from '@mantine/core';
import { LinkElement, LinkElementProps } from './Links';

export default function Typography({ children }: any) {
  return <TypographyStylesProvider>{children}</TypographyStylesProvider>;
}

const useStyles = createStyles((theme) => ({
  linkText: {
    ...theme.fn.fontStyles(),
    ...theme.fn.focusStyles(),
    textDecoration: 'none',
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 7],

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export function LinkText({ className, children, ...props }: LinkElementProps) {
  const { classes, cx } = useStyles();

  return (
    <LinkElement
      className={cx(classes.linkText, className)}
      component={Text}
      {...props}
    >
      {children}
    </LinkElement>
  );
}
