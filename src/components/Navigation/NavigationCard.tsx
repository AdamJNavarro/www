import Link from 'next/link';
import { Card, Text } from '@mantine/core';
import classes from './NavigationCard.module.css';

export interface NavigationCardProps {
  href: string;
  isExternal?: boolean;
  children: any;
}

export function NavigationCard({ href, isExternal, children }: NavigationCardProps) {
  return (
    <Card
      padding="sm"
      radius="md"
      component={Link}
      className={classes.card}
      href={href}
      target={isExternal ? '_blank' : '_self'}
    >
      {children}
    </Card>
  );
}

export function NavigationCardContent({ icon: Icon, label }: any) {
  return (
    <div className={classes.content}>
      <Icon className={classes.icon} size={30} />
      <Text inherit mt={4}>
        {label}
      </Text>
    </div>
  );
}
