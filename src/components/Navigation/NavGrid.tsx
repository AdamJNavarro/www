import { SimpleGrid } from '@mantine/core';
import { NavLinkProps } from './Navigation.types';
import Navigation from '../common/Navigation';

export default function NavGrid({ items }: { items: NavLinkProps[] }) {
  return (
    <SimpleGrid cols={3}>
      {items.map((item) => (
        <Navigation.Tile
          key={item.label}
          href={item.href}
          isExternal={item.isExternal}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </SimpleGrid>
  );
}
