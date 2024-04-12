import Image from 'next/image';
import { getLogoPath } from '~/utils';
import ThemeImage from './ThemeImage';

export function TechStackGrid({ children }: any) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_80px)] gap-12 tablet:gap-16">
      {children}
    </div>
  );
}

function StackItem({ href, name, hasThemeLogos = false }: any) {
  return (
    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-20 text-surface-secondary text-center font-medium text-sm space-y-2.5 line-clamp-2 tracking-tight hover:text-black dark:hover:text-white"
    >
      <ThemeImage
        srcDark={getLogoPath(name, hasThemeLogos ? 'dark' : undefined)}
        srcLight={getLogoPath(name, hasThemeLogos ? 'light' : undefined)}
        width={80}
        height={80}
        alt={`${name} tech stack icon`}
        className="h-12 w-12 mx-auto"
      />
      <div>{name}</div>
    </a>
  );
}

const Languages = {
  JavaScript: () => <StackItem href="https://tc39.es/ecma262/" name="JavaScript" />,
  TypeScript: () => (
    <StackItem href="https://www.typescriptlang.org/" name="TypeScript" />
  ),
  Html: () => (
    <StackItem href="https://html.spec.whatwg.org/multipage/" name="HTML" />
  ),
  Css: () => <StackItem href="https://www.w3.org/Style/CSS/" name="CSS" />,
};

const Frameworks = {
  NextJs: () => <StackItem href="https://nextjs.org/" name="Next.js" />,
  React: () => <StackItem href="https://react.dev/" name="React" />,
  ReactNative: () => (
    <StackItem href="https://reactnative.dev/" name="React Native" />
  ),
  Mantine: () => <StackItem href="https://mantine.dev/" name="Mantine" />,
  Cypress: () => (
    <StackItem href="https://www.cypress.io/" name="Cypress" hasThemeLogos />
  ),
  Tailwindcss: () => (
    <StackItem href="https://tailwindcss.com/" name="tailwindcss" />
  ),
  Expo: () => <StackItem href="https://expo.dev/" name="Expo" hasThemeLogos />,
};

// to add: Sentry, Twilio, Branch
const Services = {
  Cloudinary: () => <StackItem href="https://cloudinary.com/" name="Cloudinary" />,
  Github: () => <StackItem href="https://github.com/" name="Github" hasThemeLogos />,
  Vercel: () => <StackItem href="https://vercel.com/" name="Vercel" hasThemeLogos />,
  EAS: () => <StackItem href="https://expo.dev/eas" name="EAS" />,
  AwsIAM: () => <StackItem href="https://aws.amazon.com/iam" name="AWS IAM" />,
  AwsLambda: () => (
    <StackItem href="https://aws.amazon.com/lambda" name="AWS Lambda" />
  ),
  AwsSES: () => <StackItem href="https://aws.amazon.com/ses" name="AWS SES" />,
  AwsApiGateway: () => (
    <StackItem href="https://aws.amazon.com/api-gateway" name="AWS API Gateway" />
  ),
};

// to-add: expo go, testflight
const Environment = {
  VSCode: () => <StackItem href="https://code.visualstudio.com/" name="VSCode" />,
  Iterm: () => <StackItem href="https://iterm2.com/" name="iTerm" />,
  CodeWhisperer: () => (
    <StackItem href="https://aws.amazon.com/codewhisperer/" name="Code Whisperer" />
  ),
  OhMyZsh: () => <StackItem href="https://ohmyz.sh/" name="Oh My Zsh" />,
  AndroidStudio: () => (
    <StackItem href="https://developer.android.com/studio" name="Android Studio" />
  ),
  Xcode: () => <StackItem href="https://developer.apple.com/xcode/" name="Xcode" />,
};

export { Languages, Frameworks, Services, Environment };
