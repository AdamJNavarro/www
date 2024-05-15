import {
  allServiceStack,
  awsStack,
  frameworkStack,
  languageStack,
  possibleProjectStack,
  serviceStack,
  StackItem,
  toolStack,
} from '~/app/(main)/data/stack';

const personalWebsiteURL = 'https://adamjnavarro.com/';

type ResumeContact = {
  label: string;
  href?: string;
};

type ResumeStack = {
  label: string;
  items: StackItem[];
};

type ResumeExperience = {
  company: string;
  href: string;
  role: string;
  start: string;
  end: string;
  details: string[];
};

type ResumeProject = {
  id: number;
  name: string;
  href: string;
  summary: string;
  stack: string[];
};

type ResumePersonalCategory = {
  label: string;
  body: string;
};

const resumeName = 'Adam Navarro';
const resumeSlogan = 'Web Developer  •  UX Engineer';

const resumeContacts: ResumeContact[] = [
  {
    label: 'adamjnav@gmail.com',
  },
  {
    label: '(414) 640-6400',
  },
  {
    label: 'Milwaukee, WI',
  },
  {
    label: 'adamjnavarro.com',
    href: personalWebsiteURL,
  },
];

const awsNames = awsStack.map((item) => item.name.substring(3)).join(',');
const serviceNames = serviceStack.map((item) => item.name).join(', ');
const allServices = `${serviceNames}, AWS (${awsNames})`;

const resumeInterests = [
  'Fitness',
  'Guitar',
  'Piano',
  'Dance',
  'Films',
  'Television',
  'Reading',
];

const resumeStrengths = [
  'Empathy',
  'Open-mindedness',
  'Communication',
  'Collaboration',
  'Accountability',
  'Resourcefulness',
  'Adaptability',
  'Problem Solving',
  'Critical Thinking',
  'Approachability',
];

const resumeValues = ['some', 'values', 'go', 'here'];

const personalPlaceholder =
  'Empathy, Open-mindedness, Communication, Collaboration, Accountability, Resourcefulness, Adaptability, Problem Solving, Critical Thinking';

const resumePersonalCategories: ResumePersonalCategory[] = [
  {
    label: 'Strengths',
    body: resumeStrengths.sort((a, b) => a.localeCompare(b)).join(', '),
  },
  // {
  //   label: 'Values',
  //   body: resumeValues.sort((a, b) => a.localeCompare(b)).join(', '),
  // },
  {
    label: 'Interests',
    body: resumeInterests.sort((a, b) => a.localeCompare(b)).join(', '),
  },
];

const detailFiller =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue lacus viverra vitae congue.';

const resumeExperiences: ResumeExperience[] = [
  {
    company: 'Expo',
    href: '/',
    role: 'Technical Relations Manager',
    start: 'February 2018',
    end: 'June 2022',
    details: [
      'Served as the direct contact and conduit for Expo partners, professionals and high-value users.',
      'Created and maintained code examples and sample applications to increase user knowledge on how to leverage the Expo SDK.',
      'Maintained and made continuous improvements to Expo documentation.',
      'Contributed quality-of-life improvements to the Expo CLI.',
      'Created and iterated Expo support systems and flows using platforms such as Github, Slack, Discourse and Canny.Identified and designated resourceful and engaged users, known as Expo Pillars, in the Expo ecosystem. Pillars often resulted in external contributions and a reduction on internal support burden and cost.',
      'Built a Github Issues bot that ran weekly to determine if any team members had stale issues assigned to them and if so, sent them a Slack DM containing the issue count and links.',
      `Wrote several posts for Expo's blog "Exposition" on Medium. Content would range from instructional guides to a community showcase where we would shine a light on what Expo users were building.`,
    ],
  },
];

const resumeProjects: ResumeProject[] = [
  {
    id: 1,
    name: 'adamjnavarro.com',
    href: personalWebsiteURL,
    summary:
      'My personal website that serves as both a place to get to know me/stay up-to-date with my activity & as a playground for me to develop and sharpen my coding skills. Currently makes use of several REST apis such as Spotify, Strava, GitHub (& others) to populate data.',
    stack: possibleProjectStack
      .filter((item) => item.projectIds.includes(1))
      .map((obj) => obj.name),
  },
  {
    id: 2,
    name: 'Expo Docs',
    href: 'x',
    summary: `The documentation website for the Expo ecosystem. Personal contributions include implementing Algolia search, embedding Snack code examples for the SDK & more.`,
    stack: serviceStack.map((item) => item.name),
  },
];

type ResumeData = {
  name: string;
  slogan: string;
  about: string;
  contacts: ResumeContact[];
  tech: {
    title: string;
    stacks: {
      languages: ResumeStack;
      tools: ResumeStack;
      frameworks: ResumeStack;
      services: ResumeStack;
    };
  };
  experience: {
    title: string;
    items: ResumeExperience[];
  };
  projects: {
    title: string;
    items: ResumeProject[];
  };
  personal: {
    title: string;
    categories: ResumePersonalCategory[];
  };
};

const resume: ResumeData = {
  name: resumeName,
  slogan: resumeSlogan,
  about: `${detailFiller}`,
  contacts: resumeContacts,
  tech: {
    title: 'Tech Stack',
    stacks: {
      languages: {
        label: 'Languages',
        items: languageStack,
      },
      tools: {
        label: 'Tools',
        items: toolStack,
      },
      frameworks: {
        label: 'Frameworks & Libraries',
        items: frameworkStack,
      },
      services: {
        label: 'Services',
        items: allServiceStack,
      },
    },
  },
  experience: {
    title: 'Relevant Experience',
    items: resumeExperiences,
  },
  projects: {
    title: 'Projects',
    items: resumeProjects,
  },
  personal: {
    title: 'Personal',
    categories: resumePersonalCategories,
  },
};

export { resume, personalPlaceholder };
export type { ResumeExperience, ResumeProject };
