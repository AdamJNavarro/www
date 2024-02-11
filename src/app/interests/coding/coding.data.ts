import * as wwwSnippets from '../../projects/coding/snippets/personal-website';

type CodingStackIDs = 'React' | 'Next.js' | 'Vercel' | 'Mantine' | 'Cypress';

type CodingProject = {
  slug: string;
  name: string;
  github: {
    owner: string;
    repo: string;
  };
  snippets: any;
  stack: CodingStackIDs[];
};

const codingProjects: CodingProject[] = [
  {
    slug: 'personal-website',
    name: 'Personal Website',
    github: {
      owner: 'adamjnavarro',
      repo: 'www',
    },
    snippets: {
      deps: wwwSnippets.deps,
      devDeps: wwwSnippets.devDeps,
    },
    stack: ['React', 'Mantine', 'Next.js', 'Vercel', 'Cypress'],
  },
];

type CodingStackItem = {
  id: CodingStackIDs;
  href: string;
  logo: string;
};

const codingStack: CodingStackItem[] = [
  {
    id: 'Mantine',
    href: 'https://mantine.dev/',
    logo: '/img/logos/mantine.svg',
  },
  {
    id: 'Next.js',
    href: 'https://nextjs.org/',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    id: 'Vercel',
    href: 'https://vercel.com/',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
  },
  {
    id: 'React',
    href: 'https://react.dev/',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    id: 'Cypress',
    href: 'https://www.cypress.io/',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg',
  },
];

const codingFrameworkItems = [
  {
    name: 'Mantine',
    href: 'https://mantine.dev/',
  },
  {
    name: 'Next.js',
    href: 'https://nextjs.org/',
  },
  {
    name: 'React',
    href: 'https://react.dev/',
  },
  {
    name: 'Cypress',
    href: 'https://www.cypress.io/',
  },
];

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

// to add: EAS, Sentry, Twilio, Branch

const codingServicesItems = [
  {
    name: 'Cloudinary',
    href: 'https://cloudinary.com/',
  },
  {
    name: 'Vercel',
    href: 'https://vercel.com/',
  },
  {
    name: 'Github',
    href: 'https://github.com/',
  },
  {
    name: 'AWS IAM',
    href: 'https://aws.amazon.com/iam',
  },
  {
    name: 'AWS Lambda',
    href: 'https://aws.amazon.com/lambda',
  },
  {
    name: 'AWS Simple Email Service',
    href: 'https://aws.amazon.com/ses',
  },
  {
    name: 'AWS API Gateway',
    href: 'https://aws.amazon.com/api-gateway',
  },
];

export {
  codingProjects,
  codingStack,
  codingEnvItems,
  codingServicesItems,
  codingFrameworkItems,
};
