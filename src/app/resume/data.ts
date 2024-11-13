import {
  allServiceStack,
  frameworkStack,
  languageStack,
  possibleProjectStack,
  StackItem,
  toolStack,
} from '~/app/data/stack';

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
  href?: string;
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
const resumeSlogan = 'Web Developer  •  Front-End Focus';

const resumeIntro = `A position with a company that can offer some level of mentorship to help me grow.  As well, in-person time is extremely desirable. Some company characteristics that are important to me include a higher degree of team/co-worker interaction, effective & empathetic communication and efficient workflows.`;

const resumeContacts: ResumeContact[] = [
  {
    label: '(414) 640-6400',
  },
  // {
  //   label: 'Milwaukee, WI',
  // },
  {
    label: 'adamjnav@gmail.com',
    href: 'mailto:adamjnav@gmail.com',
  },
  {
    label: 'adamjnavarro.com',
    href: personalWebsiteURL,
  },
];

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

const resumeExperiences: ResumeExperience[] = [
  {
    company: 'Self-Employed',
    role: 'Developer',
    start: '2023',
    end: 'Present',
    details: [
      `Completed various freelance jobs via Upwork and Fiverr. Mainly Next.js projects as well as an occasional react native mobile assignment.`,
      `Audited and helped design/improve friends and acquaintances Wordpress websites.`,
    ],
  },
  {
    company: 'Expo',
    href: '/',
    role: 'Developer / Technical Relations Manager',
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
    href: 'https://docs.expo.dev/',
    summary: `The documentation website for the Expo ecosystem. Personal contributions include implementing Algolia search, embedding Snack code examples for the SDK & more.`,
    stack: possibleProjectStack
      .filter((item) => item.projectIds.includes(2))
      .map((obj) => obj.name),
  },
  {
    id: 3,
    name: 'Design System',
    href: 'https://main--668701d0edfbe3f26bccb5c3.chromatic.com',
    summary:
      'A personal, work-in-progress atomic design system that leverages web components that can be used in a variety of frameworks such as react, vue, svelte.',
    stack: possibleProjectStack
      .filter((item) => item.projectIds.includes(3))
      .map((obj) => obj.name),
  },
  {
    id: 4,
    name: 'Linkli',
    href: 'https://github.com/AdamJNavarro/linkli',
    summary:
      'A CLI that allows you to open docs for popular tech products in the JS ecosystem. Provides smart autocomplete suggestions based on products found within a project by detecting a product’s footprint (config files, unique package.json keys, etc). Built this due to the frustration of having to manage doc links for my project’s stack via bookmarks in Brave Browser.',
    stack: possibleProjectStack
      .filter((item) => item.projectIds.includes(4))
      .map((obj) => obj.name),
  },
  {
    id: 5,
    name: 'Pet Tracker',
    href: 'https://navarro-pet-tracker.netlify.app',
    summary:
      'A simple web app I built to help track routine activities with my dogs by simply tapping on the tile to update a log time. Currently tracks letting them out, meds, baths and grooming. I have the app running on an iPad that’s mounted next to the backyard patio door. It has nearly eliminated texts and discussions regarding if, when and how long ago dog activities have happened which was the reason I built it.',
    stack: possibleProjectStack
      .filter((item) => item.projectIds.includes(5))
      .map((obj) => obj.name),
  },
];

type ResumeData = {
  name: string;
  slogan: string;
  intro: string;
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
  intro: resumeIntro,
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

export { resume };
export type { ResumeExperience, ResumeProject };
