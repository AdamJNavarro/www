import { Loader, Text } from '@mantine/core';
import * as React from 'react';
import classes from './Page.module.css';

interface PageContainerProps {
  children: React.ReactNode;
}

const Container = React.forwardRef<HTMLDivElement, PageContainerProps>(
  (props, ref) => (
    <div ref={ref} id="main" className={classes.container} {...props} />
  )
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
  return <div className={classes.contentContainer} {...props} />;
}

function Header(props) {
  return <div className={classes.header} {...props} />;
}

interface TitleProps {
  children: React.ReactNode;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => (
  <Text className={classes.title} ref={ref} {...props} />
));

const Description = (props) => (
  <Text className={classes.description} c="dimmed" {...props} />
);

const ContentSeparator = () => <div className={classes.contentSeparator} />;

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
