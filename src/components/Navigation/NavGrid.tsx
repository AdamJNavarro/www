import { createStyles, Text, SimpleGrid } from '@mantine/core';
import { Surface } from '../common';
import { LinkElement } from '../common/Links';
import { NavLinkProps } from './Navigation.types';

const useStyles = createStyles((theme) => ({
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 90,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.025)',
    },
  },
}));

export default function NavGrid({ items }: { items: NavLinkProps[] }) {
  const { classes, theme } = useStyles();

  return (
    <SimpleGrid cols={3}>
      {items.map((item) => (
        <LinkElement
          key={item.label}
          component={Surface.Card}
          href={item.href}
          className={classes.item}
        >
          <item.icon color={theme.colors[theme.primaryColor][6]} size={32} />
          <Text size="sm" weight={500} mt={8}>
            {item.label}
          </Text>
        </LinkElement>
      ))}
    </SimpleGrid>
  );
}
