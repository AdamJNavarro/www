import { Card as MantineCard, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => {
  const { colors, colorScheme } = theme;
  return {
    hoverConfig: {
      transition: 'transform 200ms ease',
      '&:hover': {
        backgroundColor: colorScheme === 'dark' ? colors.dark[4] : colors.gray[0],
        transform: 'scale(1.025)',
      },
    },
  };
});

function Container(props) {
  return (
    <MantineCard
      p="md"
      radius="md"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      })}
      {...props}
    />
  );
}

function Card(props) {
  return (
    <MantineCard
      p="sm"
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
