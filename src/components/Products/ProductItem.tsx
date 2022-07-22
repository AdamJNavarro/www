import { Box } from '@mantine/core';
import { Surface } from '~/components/common';
import { LinkElement } from '~/components/common/Links';

interface ProductItemProps {
  leadElement: React.ReactElement;
  label: React.ReactElement;
  subLabel: React.ReactElement;
  url: string;
  children?: React.ReactElement;
}

export default function ProductItem({
  label,
  subLabel,
  url,
  children,
  leadElement,
}: ProductItemProps) {
  return (
    <LinkElement
      component={Surface.Card}
      href={url}
      isExternal
      style={{ display: 'flex' }}
    >
      {leadElement}
      <Box
        sx={(theme) => ({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: theme.spacing.md,
        })}
      >
        {label}
        {subLabel}

        {children}
      </Box>
    </LinkElement>
  );
}
