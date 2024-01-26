import { Card as MantineCard } from '@mantine/core';
import classes from './Surface.module.css';

function Card(props) {
  return (
    <MantineCard padding="sm" radius="md" className={classes.card} {...props} />
  );
}

function HoverCard(props) {
  return <Card className={classes.hoverCard} {...props} />;
}

const Surface = {
  Card,
  HoverCard,
};

export default Surface;
