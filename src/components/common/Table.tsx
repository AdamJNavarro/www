import { ScrollArea, Table } from '@mantine/core';
import cx from 'clsx';
import { useState } from 'react';
import classes from './Table.module.css';

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
  const [scrolled, setScrolled] = useState(false);

  return (
    <ScrollArea
      style={{ height: 300 }}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table
        captionSide="bottom"
        style={{ minWidth: 700 }}
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
