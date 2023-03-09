import { createStyles, Loader, Text } from '@mantine/core';
import * as React from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    overflowY: 'auto',
    position: 'relative',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '100vh',
    //backgroundColor: 'red',
  },

  contentContainer: {
    width: '100%',
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    paddingLeft: `calc(${theme.spacing.xl} * 3)`,
    paddingRight: `calc(${theme.spacing.xl} * 3)`,
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
    //backgroundColor: 'purple',
  },

  header: {
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    //backgroundColor: 'green',
  },

  title: {
    fontSize: 36,
    fontWeight: 700,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 30,
      fontWeight: 700,
    },
  },

  description: {
    fontSize: 24,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 20,
    },
  },

  contentSeparator: {
    width: '4.5rem',
    height: '1px',
    borderRadius: '0.25rem',
    backgroundColor: theme.colors.dark[4],
  },
}));

interface PageContainerProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, PageContainerProps>(
  (props, ref) => {
    const { classes } = useStyles();
    return <div ref={ref} id="main" className={classes.container} {...props} />;
  }
);

function Loading() {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loader size="xl" />
      </div>
    </Container>
  );
}

function Content(props) {
  const { classes } = useStyles();
  return <div className={classes.contentContainer} {...props} />;
}

function Header(props) {
  const { classes } = useStyles();
  return <div className={classes.header} {...props} />;
}

interface TitleProps {
  children: React.ReactNode;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { classes } = useStyles();
  return <Text className={classes.title} ref={ref} {...props} />;
});

const Description = (props) => {
  const { classes } = useStyles();
  return <Text className={classes.description} color="dimmed" {...props} />;
};

const ContentSeparator = () => {
  const { classes } = useStyles();
  return <div className={classes.contentSeparator} />;
};

const Page = {
  Container,
  Loading,
  Content,
  Header,
  Title,
  Description,
  ContentSeparator,
};

export default Page;
