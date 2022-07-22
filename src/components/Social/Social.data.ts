import {
  Books,
  BrandFacebook,
  BrandFigma,
  BrandGithub,
  BrandInstagram,
  BrandReddit,
  BrandSpotify,
  BrandTwitter,
  DeviceTvOld,
  Mail,
  Movie,
  School,
} from 'tabler-icons-react';
import { SocialPlatformProps } from './Social.types';

const SocialProfiles = {
  email: 'mailto:adamjnav@gmail.com',
  facebook: 'facebook.com/adamjosephnavarro',
  figma: 'figma.com/@adamjnavarro',
  github: 'github.com/AdamJNavarro',
  instagram: 'instagram.com/adamjnavarro',
  letterboxd: 'letterboxd.com/adamjnavarro',
  literal: 'literal.club/adamjnavarro',
  rawg: 'rawg.io/@adamjnavarro',
  reddit: 'reddit.com/user/adamjnav',
  spotify: 'open.spotify.com/user/adamjosephnavarro',
  trakt: 'trakt.tv/users/adamjnavarro',
  twitter: 'twitter.com/AdamJNavarro',
  udemy: 'udemy.com/user/adamjnavarro',
  youtube: 'youtube.com/channel/UCWiK8RcF4i56z2ZEMjJmMXw',
};
// Discord, Medium

const SocialPlatforms: SocialPlatformProps[] = [
  {
    icon: Mail,
    href: SocialProfiles.email,
    label: 'Email',
    important: true,
    logo: '',
  },
  {
    icon: BrandGithub,
    href: SocialProfiles.github,
    label: 'Github',
    important: true,
    logo: '',
  },
  {
    icon: BrandInstagram,
    href: SocialProfiles.instagram,
    label: 'Instagram',
    important: true,
    logo: '',
  },
  {
    icon: BrandTwitter,
    href: SocialProfiles.twitter,
    label: 'Twitter',
    important: true,
    logo: '',
  },
  {
    icon: BrandFacebook,
    href: SocialProfiles.facebook,
    label: 'Facebook',
    logo: '',
  },
  {
    icon: BrandFigma,
    href: SocialProfiles.figma,
    label: 'Figma',
    logo: '',
  },
  {
    icon: Movie,
    href: SocialProfiles.letterboxd,
    label: 'Letterboxd',
    logo: '',
  },
  {
    icon: Books,
    href: SocialProfiles.literal,
    label: 'Literal',
    logo: '',
  },
  {
    icon: BrandReddit,
    href: SocialProfiles.reddit,
    label: 'Reddit',
    logo: '',
  },
  {
    icon: BrandSpotify,
    href: SocialProfiles.spotify,
    label: 'Spotify',
    logo: '',
  },
  {
    icon: DeviceTvOld,
    href: SocialProfiles.trakt,
    label: 'Trakt.tv',
    logo: '',
  },
  {
    icon: School,
    href: SocialProfiles.udemy,
    label: 'Udemy',
  },
];

export { SocialProfiles, SocialPlatforms };
