import {
  IconBooks,
  IconCode,
  IconDeviceTvOld,
  IconGift,
  IconHome2,
  IconMoodHappy,
  IconMovie,
  IconMusic,
  IconQuote,
  IconShoe,
  IconSocial,
  IconStack2,
  IconTypography,
} from '@tabler/icons-react';
import { Metadata } from 'next';

type RouteConfig = {
  [key: string]: {
    icon: any;
    label: string;
    href: string;
    metadata: Metadata;
  };
};

const routes: RouteConfig = {
  books: {
    icon: IconBooks,
    label: 'Books',
    href: '/interests/books',
    metadata: {
      title: 'Books',
      description: 'A look into my literary world.',
    },
  },
  charity: {
    icon: IconGift,
    label: 'Charity',
    href: '/interests/charity',
    metadata: {
      title: 'Charity',
      description: 'Some charity work I have done.',
    },
  },
  coding: {
    icon: IconCode,
    label: 'Coding',
    href: '/interests/coding',
    metadata: {
      title: 'Coding',
      description: 'A look into my coding world.',
    },
  },
  dancing: {
    icon: IconShoe,
    label: 'Dancing',
    href: '/interests/dancing',
    metadata: {
      title: 'Dancing',
      description: 'Some of my dancing performances.',
    },
  },
  home: {
    icon: IconHome2,
    label: 'Home',
    href: '/',
    metadata: {
      description: 'The home of everything Adam Navarro.',
    },
  },
  interests: {
    icon: IconMoodHappy,
    label: 'Interests',
    href: '/interests',
    metadata: {
      title: 'Interests',
      description: 'See what I enjoy in life.',
    },
  },
  movies: {
    icon: IconMovie,
    label: 'Movies',
    href: '/interests/movies',
    metadata: {
      title: 'Movies',
      description: 'A look into my cinematic tastes.',
    },
  },
  music: {
    icon: IconMusic,
    label: 'Music',
    href: '/interests/music',
    metadata: {
      title: 'Music',
      description: 'A peek into my taste in music and podcasts.',
    },
  },
  quotes: {
    icon: IconQuote,
    label: 'Quotes',
    href: '/interests/quotes',
    metadata: {
      title: 'Quotes',
      description: 'Some of my favorite quotes.',
    },
  },
  social: {
    icon: IconSocial,
    label: 'Social',
    href: '/social',
    metadata: {
      title: 'Social',
      description: 'Where you can find me online.',
    },
  },
  stack: {
    icon: IconStack2,
    label: 'Stack',
    href: '/stack',
    metadata: {
      title: 'Stack',
      description: 'A collection of products I use.',
    },
  },
  tv: {
    icon: IconDeviceTvOld,
    label: 'TV',
    href: '/interests/tv',
    metadata: {
      title: 'TV',
      description: 'A look into my tastes in television.',
    },
  },
  words: {
    icon: IconTypography,
    label: 'Words',
    href: '/interests/words',
    metadata: {
      title: 'Words',
      description: 'A collection of words I have learned.',
    },
  },
};

export const navbarRoutes = [
  routes.home,
  routes.interests,
  routes.stack,
  routes.social,
];

export default routes;
