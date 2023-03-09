import { createStyles, getStylesRef, Text, SimpleGrid } from '@mantine/core';
import { Surface } from '../common';
import { LinkElement } from '../common/Links';
import { NavLinkProps } from './Navigation.types';

const useStyles = createStyles((theme, _params) => {
  const icon = getStylesRef('icon');
  const textColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
  const iconColor =
    theme.colorScheme === 'dark'
      ? theme.colors[theme.primaryColor][5]
      : theme.primaryColor;
  return {
    item: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: 90,
      color: textColor,
      fontWeight: 500,
      fontSize: theme.fontSizes.md,
      '&:hover': {
        color: theme.fn.lighten(textColor, 1),
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][3],
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: iconColor,
    },
  };
});

export default function NavGrid({ items }: { items: NavLinkProps[] }) {
  const { classes } = useStyles();

  return (
    <SimpleGrid cols={3}>
      {items.map((item) => (
        <LinkElement
          key={item.label}
          component={Surface.HoverCard}
          href={item.href}
          isExternal={item.isExternal}
          className={classes.item}
        >
          <item.icon className={classes.linkIcon} size={32} />
          <Text inherit mt={8}>
            {item.label}
          </Text>
        </LinkElement>
      ))}
    </SimpleGrid>
  );
}
