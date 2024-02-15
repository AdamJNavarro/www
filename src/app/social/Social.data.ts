import {
  IconBooks,
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandMedium,
  IconBrandReddit,
  IconBrandSpotify,
  IconBrandStrava,
  IconBrandTwitch,
  IconBrandTwitter,
  IconDeviceTvOld,
  IconLetterC,
  IconMail,
  IconMovie,
  IconSchool,
} from '@tabler/icons-react';

type SocialPlatformProps = {
  icon: any;
  href: string;
  label: string;
  important?: boolean;
  show: boolean;
};

const SocialUrls = {
  email: 'mailto:adamjnav@gmail.com',
  centered: 'https://centered.app/u/adamjnavarro',
  discord: 'https://discordapp.com/users/862719697422254100',
  facebook: 'https://facebook.com/adamjosephnavarro',
  figma: 'https://figma.com/@adamjnavarro',
  github: 'https://github.com/AdamJNavarro',
  instagram: 'https://instagram.com/adamjnavarro',
  letterboxd: 'https://letterboxd.com/adamjnavarro',
  literal: 'https://literal.club/adamjnavarro',
  medium: 'https://medium.com/@adamjnav',
  rawg: 'https://rawg.io/@adamjnavarro',
  reddit: 'https://reddit.com/user/adamjnav',
  spotify: 'https://open.spotify.com/user/adamjosephnavarro',
  strava: 'https://www.strava.com/athletes/107447599',
  trakt: 'https://trakt.tv/users/adamjnavarro',
  twitch: 'https://twitch.tv/adamjnavarro',
  twitter: 'https://twitter.com/AdamJNavarro',
  udemy: 'https://udemy.com/user/adamjnavarro',
  youtube: 'https://youtube.com/channel/UCWiK8RcF4i56z2ZEMjJmMXw',
};

const SocialPlatforms: SocialPlatformProps[] = [
  {
    icon: IconMail,
    href: SocialUrls.email,
    label: 'Email',
    important: true,
    show: true,
  },
  {
    icon: IconBrandGithub,
    href: SocialUrls.github,
    label: 'Github',
    important: true,
    show: true,
  },
  {
    icon: IconBrandInstagram,
    href: SocialUrls.instagram,
    label: 'Instagram',
    important: true,
    show: true,
  },
  {
    icon: IconBrandTwitter,
    href: SocialUrls.twitter,
    label: 'Twitter',
    important: true,
    show: false,
  },
  {
    icon: IconLetterC,
    href: SocialUrls.centered,
    label: 'Centered',
    show: false,
  },
  {
    icon: IconBrandDiscord,
    href: SocialUrls.discord,
    label: 'Discord',
    show: false,
  },
  {
    icon: IconBrandFacebook,
    href: SocialUrls.facebook,
    label: 'Facebook',
    show: false,
  },
  {
    icon: IconBrandFigma,
    href: SocialUrls.figma,
    label: 'Figma',
    show: false,
  },
  {
    icon: IconMovie,
    href: SocialUrls.letterboxd,
    label: 'Letterboxd',
    show: true,
  },
  {
    icon: IconBooks,
    href: SocialUrls.literal,
    label: 'Literal',
    show: true,
  },
  {
    icon: IconBrandMedium,
    href: SocialUrls.medium,
    label: 'Medium',
    show: false,
  },
  {
    icon: IconBrandReddit,
    href: SocialUrls.reddit,
    label: 'Reddit',
    show: false,
  },
  {
    icon: IconBrandStrava,
    href: SocialUrls.strava,
    label: 'Strava',
    show: false,
  },
  {
    icon: IconBrandSpotify,
    href: SocialUrls.spotify,
    label: 'Spotify',
    show: true,
  },
  {
    icon: IconDeviceTvOld,
    href: SocialUrls.trakt,
    label: 'Trakt',
    show: true,
  },
  {
    icon: IconBrandTwitch,
    href: SocialUrls.twitch,
    label: 'Twitch',
    show: false,
  },
  {
    icon: IconSchool,
    href: SocialUrls.udemy,
    label: 'Udemy',
    show: false,
  },
];

export { SocialUrls, SocialPlatforms };
