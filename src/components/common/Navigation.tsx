import { Card as MantineCard, Text } from '@mantine/core';
import Link from 'next/link';
import cx from 'clsx';
import { IconArrowUpRight } from '@tabler/icons-react';
import classes from './Navigation.module.css';

type NavigationCardProps = {
  href: string;
  isExternal?: boolean;
  children?: any;
};

type NavigationTileProps = NavigationCardProps & {
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
    <Card {...props}>
      <div className={classes.content}>
        <props.icon className={classes.icon} size={30} />
        <Text inherit mt={4}>
          {props.label}
        </Text>
      </div>
    </Card>
  );
}

const Navigation = {
  Card,
  Tile,
};

export default Navigation;
