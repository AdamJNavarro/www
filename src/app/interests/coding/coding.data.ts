import * as wwwSnippets from '../../projects/coding/snippets/personal-website';

type CodingStackItem = {
  name: string;
  href: string;
  logo?: string;
};

type CodingProjectStack = {
  frameworks: FrameworkNames[];
  services: ServicesNames[];
};

type CodingProject = {
  slug: string;
  name: string;
  description: string;
  github: {
    owner: string;
    repo: string;
  };
  snippets: any;
  stack: CodingProjectStack;
};

const codingProjects: CodingProject[] = [
  {
    slug: 'personal-website',
    name: 'Personal Website',
    description: 'The very website you are currently on.',
    github: {
      owner: 'adamjnavarro',
      repo: 'www',
    },
    snippets: {
      deps: wwwSnippets.deps,
      devDeps: wwwSnippets.devDeps,
    },
    stack: {
      frameworks: ['Next.js', 'React', 'Cypress'],
      services: ['Vercel'],
    },
  },
];

const codingFrameworkItems: CodingStackItem[] = [
  {
    name: 'Mantine' as const,
    href: 'https://mantine.dev/',
  },
  {
    name: 'Next.js' as const,
    href: 'https://nextjs.org/',
  },
  {
    name: 'React' as const,
    href: 'https://react.dev/',
  },
  {
    name: 'Cypress' as const,
    href: 'https://www.cypress.io/',
  },
];

type FrameworkNames = (typeof codingFrameworkItems)[number]['name'];

// to add: EAS, Sentry, Twilio, Branch

const codingServicesItems: CodingStackItem[] = [
  {
    name: 'Cloudinary' as const,
    href: 'https://cloudinary.com/',
  },
  {
    name: 'Vercel' as const,
    href: 'https://vercel.com/',
  },
  {
    name: 'Github' as const,
    href: 'https://github.com/',
  },
  {
    name: 'AWS IAM' as const,
    href: 'https://aws.amazon.com/iam',
  },
  {
    name: 'AWS Lambda' as const,
    href: 'https://aws.amazon.com/lambda',
  },
  {
    name: 'AWS Simple Email Service' as const,
    href: 'https://aws.amazon.com/ses',
  },
  {
    name: 'AWS API Gateway' as const,
    href: 'https://aws.amazon.com/api-gateway',
  },
];

type ServicesNames = (typeof codingServicesItems)[number]['name'];

// to-add: expo go, android studio, xcode, testflight

const codingEnvItems = [
  {
    name: 'VSCode',
    href: 'https://code.visualstudio.com/',
  },
  {
    name: 'iTerm',
    href: 'https://iterm2.com/',
  },
  {
    name: 'CodeWhisperer',
    href: 'https://aws.amazon.com/codewhisperer/',
  },
  {
    name: 'Oh My Zsh',
    href: 'https://ohmyz.sh/',
  },
  {
    name: 'Postgres.app',
    href: 'https://postgresapp.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660679336/logos/postgres.png',
  },
];

export { codingProjects, codingEnvItems, codingServicesItems, codingFrameworkItems };
