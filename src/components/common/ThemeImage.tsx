import Image, { ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, className, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className={`block dark:hidden ${className}`} />
      <Image {...rest} src={srcDark} className={`hidden dark:block ${className}`} />
    </>
  );
};

export default ThemeImage;
