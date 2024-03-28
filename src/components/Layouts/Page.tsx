import classNames from 'classnames';

function Header({ children, ...rest }) {
  const fullClasses = classNames('prose mb-16', rest.className);
  return (
    <div {...rest} className={fullClasses}>
      {children}
    </div>
  );
}

function Title({ children, ...rest }) {
  const fullClasses = classNames(rest.className);
  return (
    <h1 {...rest} className={fullClasses}>
      {children}
    </h1>
  );
}

const Page = {
  Header,
  Title,
};

function ContentHeader({ children, ...rest }) {
  const fullClasses = classNames('prose', rest.className);
  return (
    <div {...rest} className={fullClasses}>
      {children}
    </div>
  );
}

function ContentTitle({ children, ...rest }) {
  const fullClasses = classNames(rest.className);
  return (
    <h2 {...rest} className={fullClasses}>
      {children}
    </h2>
  );
}

const Content = {
  Header: ContentHeader,
  Title: ContentTitle,
};

export { Page, Content };