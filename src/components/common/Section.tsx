/* eslint-disable jsx-a11y/heading-has-content */
import classes from './Section.module.css';

function Container(props) {
  return <div id={props.id} {...props} />;
}

function Header(props) {
  return <div {...props} />;
}

const Title = (props) => <h3 id={props.id} className={classes.title} {...props} />;

const Description = (props) => <p className={classes.description} {...props} />;

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
