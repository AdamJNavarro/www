import { getLogoPath } from '~/utils';
import ThemeImage from '~/components/common/ThemeImage';

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
  reddit: 'https://reddit.com/user/adamjnav',
  spotify: 'https://open.spotify.com/user/adamjosephnavarro',
  strava: 'https://www.strava.com/athletes/107447599',
  trakt: 'https://trakt.tv/users/adamjnavarro',
  twitch: 'https://twitch.tv/adamjnavarro',
  twitter: 'https://twitter.com/AdamJNavarro',
  udemy: 'https://udemy.com/user/adamjnavarro',
  youtube: 'https://youtube.com/channel/UCWiK8RcF4i56z2ZEMjJmMXw',
};

type SocialStackItem = {
  name: string;
  href: string;
  hasThemeLogos?: boolean;
};

const socialStackItems: SocialStackItem[] = [
  {
    href: SocialUrls.email,
    name: 'Gmail',
  },
  {
    href: SocialUrls.github,
    name: 'Github',
    hasThemeLogos: true,
  },
  {
    href: SocialUrls.instagram,
    name: 'Instagram',
  },
  {
    href: SocialUrls.spotify,
    name: 'Spotify',
  },
  {
    href: SocialUrls.trakt,
    name: 'Trakt',
  },
  {
    href: SocialUrls.letterboxd,
    name: 'Letterboxd',
  },
];

function StackItem({ href, name, hasThemeLogos = false }: any) {
  return (
    <div className="brightness-75 transition transform duration-300 hover:scale-110 hover:filter-none">
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 text-surface-secondary text-center font-medium text-sm space-y-4 line-clamp-2 tracking-tight hover:text-black dark:hover:text-white"
      >
        <ThemeImage
          srcDark={getLogoPath(name, hasThemeLogos ? 'dark' : undefined)}
          srcLight={getLogoPath(name, hasThemeLogos ? 'light' : undefined)}
          width={80}
          height={80}
          alt={`${name} tech stack icon`}
          className="h-12 w-12 mx-auto"
        />
        <div>{name}</div>
      </a>
    </div>
  );
}

export default function SocialStack() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_80px)] gap-12 tablet:gap-16">
      {socialStackItems.map((item) => (
        <StackItem key={item.name} {...item} />
      ))}
    </div>
  );
}
