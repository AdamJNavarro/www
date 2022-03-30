/* eslint-disable */

/*  TechStackItem Template
{
    class: "",
    experience: 0,
    name: "",
    strength: 0,
    url: ""
}
*/

/*  BaseStackItem Template
{
    experience: 0,
    name: "",
    strength: 0,
    url: ""
}
*/

type TechProductClass = 'Frontend' | 'Backend';

type BaseStackItem = {
  experience: number;
  name: string;
  strength: number;
  url?: string;
};

type TechStackItem = {
  class?: TechProductClass;
  experience: number;
  name: string;
  strength: number;
  url?: string;
};

type PersonalStackItem = {
  name: string;
  url?: string;
};

export const languageStack: BaseStackItem[] = [
  {
    experience: 0,
    name: 'AppleScript',
    strength: 0,
  },
  {
    experience: 0,
    name: 'Bash',
    strength: 0,
  },
  {
    experience: 0,
    name: 'GraphQL',
    strength: 0,
  },
  {
    experience: 0,
    name: 'JavaScript',
    strength: 0,
  },
  {
    experience: 0,
    name: 'TypeScript',
    strength: 0,
  },
];

export const techStack: TechStackItem[] = [
  {
    experience: 0,
    name: 'Amplitude',
    strength: 0,
    url: 'https://amplitude.com/',
  },
  {
    experience: 0,
    name: 'Apollo Client',
    strength: 0,
    url: '',
  },
  {
    experience: 0,
    name: 'Apollo Server',
    strength: 0,
    url: '',
  },
  {
    experience: 0,
    name: 'AWS',
    strength: 0,
    url: 'https://aws.amazon.com/',
  },
  {
    experience: 0,
    name: 'Branch',
    strength: 0,
    url: 'https://branch.io/',
  },
  {
    experience: 0,
    name: 'Cloudinary',
    strength: 0,
    url: 'https://cloudinary.com/',
  },
  {
    experience: 0,
    name: 'Discourse',
    strength: 0,
    url: 'https://www.discourse.org/',
  },
  {
    experience: 0,
    name: 'Expo',
    strength: 0,
    url: 'https://expo.dev/',
  },
  {
    experience: 0,
    name: 'EAS',
    strength: 0,
    url: 'https://expo.dev/eas',
  },
  {
    experience: 0,
    name: 'Firebase',
    strength: 0,
    url: 'https://firebase.google.com/',
  },
  {
    experience: 0,
    name: 'Google Cloud Platform',
    strength: 0,
    url: 'https://cloud.google.com/',
  },
  {
    experience: 0,
    name: 'Next.js',
    strength: 0,
    url: 'https://nextjs.org/',
  },
  {
    experience: 0,
    name: 'Node.js',
    strength: 0,
    url: 'https://nodejs.dev/',
  },
  {
    experience: 0,
    name: 'Postgresql',
    strength: 0,
    url: 'https://www.postgresql.org/',
  },
  {
    experience: 0,
    name: 'Railway',
    strength: 0,
    url: 'https://railway.app/',
  },
  {
    experience: 0,
    name: 'React',
    strength: 0,
    url: 'https://reactjs.org/',
  },
  {
    experience: 0,
    name: 'React Native',
    strength: 0,
    url: 'https://reactnative.dev/',
  },
  {
    experience: 0,
    name: 'React Navigation',
    strength: 0,
    url: 'https://reactnavigation.org/',
  },
  {
    experience: 0,
    name: 'Render',
    strength: 0,
    url: 'https://render.com/',
  },
  {
    experience: 0,
    name: 'Sentry',
    strength: 0,
    url: 'https://sentry.io/',
  },
  {
    experience: 0,
    name: 'TailwindCSS',
    strength: 0,
    url: 'https://tailwindcss.com/',
  },
  {
    experience: 0,
    name: 'Twilio',
    strength: 0,
    url: 'http://www.twilio.com/',
  },
  {
    experience: 0,
    name: 'TypeORM',
    strength: 0,
    url: 'https://typeorm.io/',
  },
  {
    experience: 0,
    name: 'Vercel',
    strength: 0,
    url: 'https://vercel.com',
  },
];

export const personalStack: PersonalStackItem[] = [
  {
    name: '1Password',
    url: 'https://1password.com',
  },
  {
    name: 'Ableton Live',
    url: 'https://www.ableton.com/en/live/',
  },
  {
    name: 'Bartender 4',
    url: 'https://www.macbartender.com/Bartender4/',
  },
  {
    name: 'Bear',
    url: 'https://bear.app/',
  },
  {
    name: 'Brave Browser',
    url: 'https://brave.com/',
  },
  {
    name: 'Choosy',
    url: 'https://www.choosyosx.com',
  },
  {
    name: 'Cardhop',
    url: 'https://flexibits.com/cardhop',
  },
  {
    name: 'Cloudflare WARP',
    url: 'https://1.1.1.1/',
  },
  {
    name: 'DaisyDisk',
    url: 'https://daisydiskapp.com/index.html',
  },
  {
    name: 'Discord',
    url: 'https://discord.com/',
  },
  {
    name: 'Fantastical',
    url: 'https://flexibits.com/fantastical',
  },
  {
    name: 'Fig',
    url: 'https://fig.io/',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/',
  },
  {
    name: 'iTerm2',
    url: 'https://iterm2.com/',
  },
  {
    name: 'Keyboard Maestro',
    url: 'https://www.keyboardmaestro.com/main/',
  },
  {
    name: 'Linear',
    url: 'https://linear.app/',
  },
  {
    name: 'Magnet',
    url: 'https://magnet.crowdcafe.com/',
  },
  {
    name: 'Mimestream',
    url: 'https://mimestream.com/',
  },
  {
    name: 'Raycast',
    url: 'https://www.raycast.com/',
  },
  {
    name: 'SeeMusic',
    url: 'https://www.visualmusicdesign.com',
  },
  {
    name: 'Shortcuts',
    url: 'https://support.apple.com/guide/shortcuts/welcome/ios',
  },
  {
    name: 'Slack',
    url: 'https://slack.com/',
  },
  {
    name: 'Spotify',
    url: 'https://www.spotify.com/',
  },
  {
    name: 'Texts',
    url: 'https://texts.com/',
  },
  {
    name: 'Things',
    url: 'https://culturedcode.com/things/',
  },
  {
    name: 'Udemy',
    url: 'https://www.udemy.com/',
  },
];
