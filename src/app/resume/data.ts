import {
  allServiceStack,
  entireStack,
  frameworkStack,
  languageStack,
  toolStack,
} from '~/app/data/stack';
import { Resume, ResumeContact, ResumeExperience, ResumeProject } from './resume.types';


const personalWebsiteURL = 'https://adamjnavarro.com/';



const resumeName = 'Adam Navarro';
const resumeSlogan = 'Full Stack Developer';

const resumeObjective = `A position with a company that can offer some level of mentorship to help me grow.  As well, in-person time is extremely desirable. Some company characteristics that are important to me include a higher degree of team/co-worker interaction, effective & empathetic communication and efficient workflows.`;

const resumeContacts: ResumeContact[] = [
  {
    label: '(414) 640-6400',
  },
  {
    label: 'adamjnav@gmail.com',
    href: 'mailto:adamjnav@gmail.com',
  },
  {
    label: 'Milwaukee, WI',
  },
];


const softSkills = [
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


const resumeExperiences: ResumeExperience[] = [
  {
    company: 'Freelance',
    role: 'Developer',
    start: 'December 2023',
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
      'Created and maintained code examples and sample applications to increase user knowledge on how to leverage the Expo SDK.',
      'Maintained and made continuous improvements to Expo documentation.',
      'Contributed quality-of-life improvements to the Expo CLI.',
      'Created and iterated Expo support systems and flows using platforms such as Github, Slack, Discourse and Canny.Identified and designated resourceful and engaged users, known as Expo Pillars, in the Expo ecosystem. Pillars often resulted in external contributions and a reduction on internal support burden and cost.',
      'Served as the direct contact and conduit for Expo partners, professionals and high-value users.',
    ],
  },
];

const resumeProjects: ResumeProject[] = [
  {
    id: 1,
    name: 'Website',
    href: personalWebsiteURL,
    repo: 'https://github.com/AdamJNavarro/www#stack',
    summary: 'My personal website that serves as both a place to get to know me/stay up-to-date with my activity & as a playground for me to develop and sharpen my coding skills. Currently makes use of several REST apis such as Spotify, Strava, GitHub (& others) to populate data.',
 
  },
  {
    id: 2,
    name: 'Cog Log',
    href: 'https://adamjnav-coglog.azurewebsites.net/',
    repo: 'https://github.com/AdamJNavarro/coglog#stack',
    summary: 'A collection of learnings, questions or thoughts to be used during my daily reviews.',
  },
  {
    id: 3,
    name: 'Pet Tracker',
    href: 'https://navarro-pet-tracker.netlify.app/',
    repo: 'https://github.com/AdamJNavarro/pet-tracker#stack',
    summary: 'A simple interface to keep track of common and recurring activities for my dogs.',
  }
];



const resume: Resume = {
  name: resumeName,
  slogan: resumeSlogan,
  objective: resumeObjective,
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
    title: 'Work Experience',
    items: resumeExperiences,
  },
  projects: {
    title: 'Projects',
    items: resumeProjects,
  },
  skills: {
    title: 'Skills',
    hard: entireStack,
    soft: softSkills.sort((a, b) => a.localeCompare(b)).join(', ')
  }
};

export { resume };
