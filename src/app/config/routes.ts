import { Metadata } from 'next';

type RouteConfig = {
  [key: string]: {
    metadata: Metadata;
  };
};

const routes: RouteConfig = {
  books: {
    metadata: {
      title: 'Books',
      description: 'A look into my literary world.',
    },
  },
  charity: {
    metadata: {
      title: 'Charity',
      description: 'Some charity work I have done.',
    },
  },
  coding: {
    metadata: {
      title: 'Coding',
      description: 'A look into my coding world.',
    },
  },
  dancing: {
    metadata: {
      title: 'Dancing',
      description: 'Some of my dancing performances.',
    },
  },
  interests: {
    metadata: {
      title: 'Interests',
      description: 'See what I enjoy in life.',
    },
  },
  movies: {
    metadata: {
      title: 'Movies',
      description: 'A look into my cinematic tastes.',
    },
  },
  music: {
    metadata: {
      title: 'Music',
      description: 'A peek into my taste in music and podcasts.',
    },
  },
  quotes: {
    metadata: {
      title: 'Quotes',
      description: 'Some of my favorite quotes.',
    },
  },
  social: {
    metadata: {
      title: 'Social',
      description: 'Where you can find me online.',
    },
  },
  stack: {
    metadata: {
      title: 'Stack',
      description: 'A collection of products I use.',
    },
  },
  tv: {
    metadata: {
      title: 'TV',
      description: 'A look into my tastes in television.',
    },
  },
  words: {
    metadata: {
      title: 'Words',
      description: 'A collection of words I have learned.',
    },
  },
};

export default routes;
