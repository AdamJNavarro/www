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

function SectionHeader({ children, ...rest }) {
  const fullClasses = classNames('prose mb-8', rest.className);
  return (
    <div {...rest} className={fullClasses}>
      {children}
    </div>
  );
}

function SectionTitle({ children, ...rest }) {
  const fullClasses = classNames(rest.className);
  return (
    <h2 {...rest} className={fullClasses}>
      {children}
    </h2>
  );
}

const Section = {
  Header: SectionHeader,
  Title: SectionTitle,
};

export { Page, Section };
