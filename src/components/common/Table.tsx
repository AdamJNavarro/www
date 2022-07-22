import { createStyles, ScrollArea, Table } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface DataTableProps {
  loading: boolean;
  error: any;
  caption?: string;
  headers: string[];
  children: any;
}

export function DataTable({
  loading,
  error,
  caption,
  headers,
  children,
}: DataTableProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  return (
    <ScrollArea
      sx={{ height: 300 }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table
        captionSide="bottom"
        sx={{ minWidth: 700 }}
        striped
        verticalSpacing="xs"
      >
        {caption && <caption>{caption}</caption>}
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </ScrollArea>
  );
}
