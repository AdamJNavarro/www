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

export { codingProjects, codingStack };
