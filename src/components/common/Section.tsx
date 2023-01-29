import { createStyles, Text } from '@mantine/core';
import * as React from 'react';

const useStyles = createStyles((theme) => ({
  sectionContainer: {
    paddingTop: theme.spacing.xl * 2,
    //backgroundColor: 'red',
  },

  sectionHeader: {
    //backgroundColor: 'pink
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: 600,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
      fontWeight: 500,
    },
  },

  sectionDescription: {
    fontSize: 22,
    fontWeight: 500,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 18,
      fontWeight: 400,
    },
  },

  sectionContent: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl * 2,
    //backgroundColor: 'purple',
  },

  sectionSeparator: {
    width: '4.5rem',
    height: '1px',
    borderRadius: '0.25rem',
    backgroundColor: theme.colors.dark[4],
  },
}));

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  (props, ref) => {
    const { classes } = useStyles();
    return (
      <div id={props.id} ref={ref} className={classes.sectionContainer} {...props} />
    );
  }
);

function Header(props) {
  const { classes } = useStyles();
  return <div className={classes.sectionHeader} {...props} />;
}

const Title = (props) => {
  const { classes } = useStyles();
  return <Text id={props.id} className={classes.sectionTitle} {...props} />;
};

const Description = (props) => {
  const { classes } = useStyles();
  return <Text className={classes.sectionDescription} color="dimmed" {...props} />;
};

function Content(props) {
  const { classes } = useStyles();
  return <div className={classes.sectionContent} {...props} />;
}

const Section = {
  Container,
  Header,
  Title,
  Description,
  Content,
};

export default Section;
