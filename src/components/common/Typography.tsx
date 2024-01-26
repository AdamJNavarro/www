import { TypographyStylesProvider } from '@mantine/core';

export default function Typography({ children }: any) {
  return <TypographyStylesProvider>{children}</TypographyStylesProvider>;
}
