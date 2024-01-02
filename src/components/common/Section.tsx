import { Text } from '@mantine/core';
import * as React from 'react';
import classes from './Section.module.css';

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  (props, ref) => (
    <div id={props.id} ref={ref} className={classes.container} {...props} />
  )
);

function Header(props) {
  return <div {...props} />;
}

const Title = (props) => <Text id={props.id} className={classes.title} {...props} />;

const Description = (props) => (
  <Text className={classes.description} c="dimmed" {...props} />
);

function Content(props) {
  return <div className={classes.content} {...props} />;
}

const Section = {
  Container,
  Header,
  Title,
  Description,
  Content,
};

export default Section;
