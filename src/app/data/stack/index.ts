type StackItem = {
  name: string;
  href: string;
  activelyUsing: boolean;
  hasThemeLogos?: boolean;
};

const languageStack: StackItem[] = [
  {
    name: 'JavaScript',
    href: 'https://tc39.es/ecma262/',
    activelyUsing: true,
  },
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    activelyUsing: true,
  },
  {
    name: 'HTML',
    href: 'https://html.spec.whatwg.org/multipage/',
    activelyUsing: true,
  },
  {
    name: 'CSS',
    href: 'https://www.w3.org/Style/CSS/',
    activelyUsing: true,
  },
  {
    name: "C#",
    href: 'https://dotnet.microsoft.com/en-us/languages/csharp',
    activelyUsing: true,
  },
  {
    name: 'MDX',
    href: 'https://mdxjs.com/',
    activelyUsing: true,
  },
  {
    name: 'GraphQL',
    href: 'https://graphql.org/',
    activelyUsing: false,
  },
  {
    name: 'Bash',
    href: 'https://www.gnu.org/software/bash/',
    activelyUsing: false,
    hasThemeLogos: true,
  },
];

const frameworkStack: StackItem[] = [
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
    activelyUsing: true,
  },
  {
    name: 'React',
    href: 'https://react.dev/',
    activelyUsing: true,
  },
  {
    name: 'Node.js',
    href: 'https://nodejs.org/',
    activelyUsing: true,
  },
  {
    name: ".NET Core",
    href: "https://dotnet.microsoft.com/en-us/apps/aspnet",
    activelyUsing: true,
  },
  {
    name: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
    activelyUsing: true,
  },
  {
    name: 'Mantine',
    href: 'https://mantine.dev/',
    activelyUsing: false,
  },
  {
    name: 'Apollo',
    href: 'https://www.apollographql.com/docs/',
    activelyUsing: false,
    hasThemeLogos: true,
  },
  {
    name: 'Cypress',
    href: 'https://www.cypress.io/',
    activelyUsing: true,
    hasThemeLogos: true,
  },
  {
    name: 'Expo',
    href: 'https://expo.dev/',
    activelyUsing: false,
    hasThemeLogos: true,
  },
  {
    name: 'React Native',
    href: 'https://reactnative.dev/',
    activelyUsing: false,
  },
  {
    name: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    activelyUsing: true,
  },
  {
    name: 'Gatsby',
    href: 'https://www.gatsbyjs.com/',
    activelyUsing: false,
  },
  {
    name: 'Storybook',
    href: 'https://storybook.js.org/',
    activelyUsing: true,
  },
  {
    name: 'Lit',
    href: 'https://lit.dev/',
    activelyUsing: true,
  },
];

const serviceStack: StackItem[] = [
  {
    name: 'Vercel',
    href: 'https://vercel.com/',
    activelyUsing: true,
    hasThemeLogos: true,
  },
  {
    name: 'Github',
    href: 'https://github.com/',
    activelyUsing: true,
    hasThemeLogos: true,
  },
  {
    name: "Azure",
    href: 'https://azure.microsoft.com/',
    activelyUsing: true,
  },
  {
    name: 'EAS',
    href: 'https://expo.dev/eas',
    activelyUsing: false,
    hasThemeLogos: false,
  },
  {
    name: 'Cloudinary',
    href: 'https://cloudinary.com/',
    activelyUsing: true,
  },
  {
    name: 'Docker',
    href: 'https://www.docker.com/',
    activelyUsing: true,
  },
  {
    name: 'Branch',
    href: 'https://www.branch.io/',
    activelyUsing: false,
    hasThemeLogos: true,
  },
  {
    name: 'Twilio',
    href: 'https://www.twilio.com/',
    activelyUsing: false,
  },
  {
    name: 'Algolia',
    href: 'https://www.algolia.com/',
    activelyUsing: false,
  },
  {
    name: 'Firebase',
    href: 'https://firebase.google.com/',
    activelyUsing: false,
  },
  {
    name: 'CircleCI',
    href: 'https://circleci.com/',
    activelyUsing: false,
    hasThemeLogos: true,
  },
  {
    name: 'Amplitude',
    href: 'https://amplitude.com/',
    activelyUsing: false,
  },
  {
    name: 'Segment',
    href: 'https://segment.com/',
    activelyUsing: false,
  },
  {
    name: 'Sentry',
    href: 'https://sentry.io/',
    activelyUsing: false,
    hasThemeLogos: true,
  },
  {
    name: 'Netlify',
    href: 'https://www.netlify.com/',
    activelyUsing: false,
  },
  {
    name: 'Heroku',
    href: 'https://www.heroku.com/',
    activelyUsing: false,
  },
  {
    name: 'Supabase',
    href: 'https://supabase.com/',
    activelyUsing: false,
  },
  {
    name: 'Prisma',
    href: 'https://www.prisma.io/',
    activelyUsing: false,
  },
  {
    name: 'Wordpress',
    href: 'https://wordpress.com/',
    activelyUsing: false,
  },
  {
    name: 'Chromatic',
    href: 'https://www.chromatic.com/',
    activelyUsing: true,
  },
  // NEED TO FIND LOGOS FOR BELOW ITEMS
  // {
  //   name: 'Fathom',
  //   href: 'https://usefathom.com/',
  //   activelyUsing: false,
  // },
  // {
  //   name: 'Render',
  //   href: 'https://render.com/',
  //   activelyUsing: false,
  // }
  // {
  //   name: 'Plausible',
  //   href: 'https://plausible.io/',
  //   activelyUsing: false,
  // }
];

const awsStack: StackItem[] = [
  {
    name: 'AWS IAM',
    href: 'https://aws.amazon.com/iam',
    activelyUsing: false,
  },
  {
    name: 'AWS Lambda',
    href: 'https://aws.amazon.com/lambda',
    activelyUsing: false,
  },
  {
    name: 'AWS SES',
    href: 'https://aws.amazon.com/ses',
    activelyUsing: false,
  },
  {
    name: 'AWS API Gateway',
    href: 'https://aws.amazon.com/api-gateway',
    activelyUsing: false,
  },
];

const toolStack: StackItem[] = [
  {
    name: 'Git',
    href: 'https://git-scm.com/',
    activelyUsing: true,
  },
  {
    name: 'Android Studio',
    href: 'https://developer.android.com/studio',
    activelyUsing: false,
  },
  {
    name: 'Xcode',
    href: 'https://developer.apple.com/xcode/',
    activelyUsing: false,
  },
  {
    name: 'NPM',
    href: 'https://www.npmjs.com/',
    activelyUsing: true,
  },
  {
    name: 'Yarn',
    href: 'https://yarnpkg.com/',
    activelyUsing: true,
  },
  {
    name: 'ESlint',
    href: 'https://eslint.org/',
    activelyUsing: true,
  },
  {
    name: 'Commitlint',
    href: 'https://commitlint.js.org/',
    activelyUsing: true,
  },
  {
    name: 'Prettier',
    href: 'https://prettier.io/',
    activelyUsing: true,
  },
  {
    name: 'Slack',
    href: 'https://slack.com/',
    activelyUsing: false,
  },
  {
    name: 'Linear',
    href: 'https://linear.app/',
    activelyUsing: false,
    hasThemeLogos: true,
  },
];

const environmentStack: StackItem[] = [
  {
    name: 'VSCode',
    href: 'https://code.visualstudio.com/',
    activelyUsing: true,
  },
  {
    name: 'iTerm',
    href: 'https://iterm2.com/',
    activelyUsing: true,
  },
  {
    name: 'Oh My Zsh',
    href: 'https://ohmyz.sh/',
    activelyUsing: true,
  },
  {
    name: 'Amazon Q',
    href: 'https://aws.amazon.com/q/',
    activelyUsing: true,
  },
  {
    name: "Rider",
    href: "https://www.jetbrains.com/rider/",
    activelyUsing: true,
  }
];

const experimentingStack: StackItem[] = [
  {
    name: 'Zed',
    href: 'https://zed.dev/',
    activelyUsing: true,
    hasThemeLogos: true,
  },
  {
    name: 'PNPM',
    href: 'https://pnpm.io/',
    activelyUsing: true,
  },
  {
    name: 'Remix',
    href: 'https://remix.run/',
    activelyUsing: true,
  },
  {
    name: 'Nuxt',
    href: 'https://nuxt.com/',
    activelyUsing: true,
  },
  {
    name: 'Vue.js',
    href: 'https://vuejs.org/',
    activelyUsing: true,
  },
  {
    name: 'Nx',
    href: 'https://nx.dev/',
    activelyUsing: true,
    hasThemeLogos: true,
  },
];

const possibleProjectStack: StackItem[] = [
  ...languageStack,
  ...frameworkStack,
  ...serviceStack,
  ...awsStack,
];

const allServiceStack = [...serviceStack, ...awsStack];

const entireStack = [...languageStack, ...allServiceStack, ...frameworkStack, ...toolStack]


export {
  languageStack,
  frameworkStack,
  toolStack,
  awsStack,
  serviceStack,
  allServiceStack,
  environmentStack,
  possibleProjectStack,
  experimentingStack,
  entireStack
};

export type { StackItem };
