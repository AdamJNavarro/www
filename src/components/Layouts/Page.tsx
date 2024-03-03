/* eslint-disable jsx-a11y/heading-has-content */
function Container(props) {
  return (
    <div
      className="flex relative overflow-y-auto flex-col w-100 bg-red"
      {...props}
    />
  );
}

function Content(props) {
  return <div className="bg-zinc-800 w-100 pt-12 pb-16 px-8 sm:px-6" {...props} />;
}

function Header(props) {
  return <div className="pb-8" {...props} />;
}

const Title = (props) => (
  <h1
    className="font-bold text-lg text-black dark:text-white sm:text-xl"
    {...props}
  />
);

const Description = (props) => (
  <p className="text-md text-zinc-800 dark:text-zinc-300 sm:text-md" {...props} />
);

const Page = {
  Container,
  Content,
  Header,
  Title,
  Description,
};

export { Page };
