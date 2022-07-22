import { Card as MantineCard, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hoverConfig: {
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.02)',
    },
  },
}));

function Container(props) {
  return (
    <MantineCard
      radius="md"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      })}
      {...props}
    />
  );
}

function Card(props) {
  return (
    <MantineCard
      radius="md"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      })}
      {...props}
    />
  );
}

const Surface = {
  Container,
  Card,
};

export default Surface;
