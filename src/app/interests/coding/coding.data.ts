import * as wwwSnippets from '../../projects/coding/snippets/personal-website';

type CodingProject = {
  slug: string;
  name: string;
  github: {
    owner: string;
    repo: string;
  };
  snippets: any;
  stack: string[];
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
    stack: ['Mantine', 'Vercel'],
  },
];

const codingStack = [
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
];

export { codingProjects, codingStack };
