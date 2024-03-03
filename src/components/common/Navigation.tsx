import { Card as MantineCard, SimpleGrid, Text } from '@mantine/core';
import Link from 'next/link';
import cx from 'clsx';
import { IconArrowUpRight } from '@tabler/icons-react';
import classes from './Navigation.module.css';

type NavigationLinkProps = {
  icon: any;
  label: string;
  href: string;
  isExternal?: boolean;
};

type NavigationCardProps = {
  href: string;
  isExternal?: boolean;
  children?: any;
};

type NavigationTileProps = {
  href: string;
  icon: any;
  label: string;
};

function Card(props: NavigationCardProps) {
  return (
    <MantineCard
      padding="sm"
      radius="md"
      component={Link}
      target={props.isExternal ? '_blank' : '_self'}
      className={cx(classes.surface, classes.card)}
      href={props.href}
    >
      {props.children}
      {props.isExternal && (
        <IconArrowUpRight size={20} className={classes.externalIcon} />
      )}
    </MantineCard>
  );
}

function Tile(props: NavigationTileProps) {
  return (
    <Link href={props.href} className="rounded-md p-4 bg-zinc-900">
      <div className="flex flex-col items-center justify-center text-center h-20 text-md">
        <props.icon className="text-violet-500 h-7 w-7" size={28} />
        <div className="mt-2">{props.label}</div>
      </div>
    </Link>
  );
}

function Grid({ items }: { items: NavigationLinkProps[] }) {
  return (
    <SimpleGrid cols={3}>
      {items.map((item) => (
        <Navigation.Tile
          key={item.label}
          href={item.href}
          //isExternal={item.isExternal}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </SimpleGrid>
  );
}

const Navigation = {
  Card,
  Tile,
  Grid,
};

export default Navigation;
