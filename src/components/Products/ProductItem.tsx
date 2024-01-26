import { Box } from '@mantine/core';

import Navigation from '../common/Navigation';

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
    <Navigation.Card href={url} isExternal>
      <div
        style={{
          display: 'flex',
        }}
      >
        {leadElement}
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 'var(--mantine-spacing-md)',
          }}
        >
          {label}
          {subLabel}

          {children}
        </Box>
      </div>
    </Navigation.Card>
  );
}
