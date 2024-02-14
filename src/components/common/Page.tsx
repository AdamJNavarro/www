/* eslint-disable jsx-a11y/heading-has-content */
import classes from './Page.module.css';

function Container(props) {
  return <div id="main" className={classes.container} {...props} />;
}

function Content(props) {
  return <div className={classes.contentContainer} {...props} />;
}

function Header(props) {
  return <div className={classes.header} {...props} />;
}

const Title = (props) => <h1 className={classes.title} {...props} />;

const Description = (props) => <p className={classes.description} {...props} />;

const ContentSeparator = () => <div className={classes.contentSeparator} />;

const Page = {
  Container,
  Content,
  Header,
  Title,
  Description,
  ContentSeparator,
};

export default Page;
