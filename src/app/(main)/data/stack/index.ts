type StackItem = {
  name: string;
  href: string;
  activelyUsing: boolean;
  projectIds: number[];
  hasThemeLogos?: boolean;
};

const languageStack: StackItem[] = [
  {
    name: 'JavaScript',
    href: 'https://tc39.es/ecma262/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'HTML',
    href: 'https://html.spec.whatwg.org/multipage/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'CSS',
    href: 'https://www.w3.org/Style/CSS/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'MDX',
    href: 'https://mdxjs.com/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'GraphQL',
    href: 'https://graphql.org/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Bash',
    href: 'https://www.gnu.org/software/bash/',
    activelyUsing: false,
    projectIds: [],
  },
];

const frameworkStack: StackItem[] = [
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'React',
    href: 'https://react.dev/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'Node.js',
    href: 'https://nodejs.org/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'Mantine',
    href: 'https://mantine.dev/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Apollo',
    href: 'https://www.apollographql.com/docs/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Cypress',
    href: 'https://www.cypress.io/',
    activelyUsing: true,
    projectIds: [1],
    hasThemeLogos: true,
  },
  {
    name: 'Expo',
    href: 'https://expo.dev/',
    activelyUsing: false,
    projectIds: [],
    hasThemeLogos: true,
  },
  {
    name: 'React Native',
    href: 'https://reactnative.dev/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    activelyUsing: true,
    projectIds: [1],
  },
  {
    name: 'Gatsby',
    href: 'https://www.gatsbyjs.com/',
    activelyUsing: false,
    projectIds: [],
  },
];

const serviceStack: StackItem[] = [
  {
    name: 'Vercel',
    href: 'https://vercel.com/',
    activelyUsing: true,
    projectIds: [1],
    hasThemeLogos: true,
  },
  {
    name: 'Github',
    href: 'https://github.com/',
    activelyUsing: true,
    projectIds: [],
    hasThemeLogos: true,
  },
  {
    name: 'EAS',
    href: 'https://expo.dev/eas',
    activelyUsing: false,
    projectIds: [],
    hasThemeLogos: true,
  },
  {
    name: 'Cloudinary',
    href: 'https://cloudinary.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Docker',
    href: 'https://www.docker.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Branch',
    href: 'https://www.branch.io/',
    activelyUsing: false,
    projectIds: [],
    hasThemeLogos: true,
  },
  {
    name: 'Twilio',
    href: 'https://www.twilio.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Algolia',
    href: 'https://www.algolia.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Firebase',
    href: 'https://firebase.google.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'CircleCI',
    href: 'https://circleci.com/',
    activelyUsing: false,
    projectIds: [],
    hasThemeLogos: true,
  },
  {
    name: 'Amplitude',
    href: 'https://amplitude.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Segment',
    href: 'https://segment.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Sentry',
    href: 'https://sentry.io/',
    activelyUsing: false,
    projectIds: [],
    hasThemeLogos: true,
  },
  {
    name: 'Netlify',
    href: 'https://www.netlify.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Heroku',
    href: 'https://www.heroku.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Supabase',
    href: 'https://supabase.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Prisma',
    href: 'https://www.prisma.io/',
    activelyUsing: false,
    projectIds: [],
  },
  // NEED TO FIND LOGOS FOR BELOW ITEMS
  // {
  //   name: 'Fathom',
  //   href: 'https://usefathom.com/',
  //   activelyUsing: false,
  //   projectIds: [],
  // },
  // {
  //   name: 'Render',
  //   href: 'https://render.com/',
  //   activelyUsing: false,
  //   projectIds: [],
  // }
  // {
  //   name: 'Plausible',
  //   href: 'https://plausible.io/',
  //   activelyUsing: false,
  //   projectIds: [],
  // }
];

const awsStack: StackItem[] = [
  {
    name: 'AWS IAM',
    href: 'https://aws.amazon.com/iam',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'AWS Lambda',
    href: 'https://aws.amazon.com/lambda',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'AWS SES',
    href: 'https://aws.amazon.com/ses',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'AWS API Gateway',
    href: 'https://aws.amazon.com/api-gateway',
    activelyUsing: false,
    projectIds: [],
  },
];

const toolStack: StackItem[] = [
  {
    name: 'Git',
    href: 'https://git-scm.com/',
    activelyUsing: true,
    projectIds: [],
  },
  {
    name: 'Android Studio',
    href: 'https://developer.android.com/studio',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Xcode',
    href: 'https://developer.apple.com/xcode/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'NPM',
    href: 'https://www.npmjs.com/',
    activelyUsing: true,
    projectIds: [],
  },
  {
    name: 'Yarn',
    href: 'https://yarnpkg.com/',
    activelyUsing: true,
    projectIds: [],
  },
  {
    name: 'ESlint',
    href: 'https://eslint.org/',
    activelyUsing: true,
    projectIds: [],
  },
  {
    name: 'Prettier',
    href: 'https://prettier.io/',
    activelyUsing: true,
    projectIds: [],
  },
  {
    name: 'Slack',
    href: 'https://slack.com/',
    activelyUsing: false,
    projectIds: [],
  },
  {
    name: 'Linear',
    href: 'https://linear.app/',
    activelyUsing: false,
    projectIds: [],
    hasThemeLogos: true,
  },
];

const environmentStack: StackItem[] = [
  {
    name: 'VSCode',
    href: 'https://code.visualstudio.com/',
    activelyUsing: true,
    projectIds: [],
  },
  {
    name: 'iTerm',
    href: 'https://iterm2.com/',
    activelyUsing: true,
    projectIds: [],
  },
  {
    name: 'Oh My Zsh',
    href: 'https://ohmyz.sh/',
    activelyUsing: true,
    projectIds: [],
  },
  {
    name: 'Amazon Q',
    href: 'https://aws.amazon.com/q/',
    activelyUsing: true,
    projectIds: [],
  },
];

const possibleProjectStack: StackItem[] = [
  ...languageStack,
  ...frameworkStack,
  ...serviceStack,
  ...awsStack,
];

const allServiceStack = [...serviceStack, ...awsStack];

export {
  languageStack,
  frameworkStack,
  toolStack,
  awsStack,
  serviceStack,
  allServiceStack,
  environmentStack,
  possibleProjectStack,
};

export type { StackItem };
