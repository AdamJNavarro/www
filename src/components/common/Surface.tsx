import { Card as MantineCard } from '@mantine/core';

function Card(props) {
  return (
    <MantineCard
      p="sm"
      radius="md"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      })}
      {...props}
    />
  );
}

function HoverCard(props) {
  return (
    <Card
      sx={(theme) => ({
        transition: 'transform 200ms ease',
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[5]
              : theme.colors.gray[0],
          transform: 'scale(1.025)',
        },
      })}
      {...props}
    />
  );
}

const Surface = {
  Card,
  HoverCard,
};

export default Surface;
