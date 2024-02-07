import React from 'react';
import {
  IconCode,
  IconMusic,
  IconBooks,
  IconDeviceTvOld,
  IconQuote,
  IconShoe,
  IconTypography,
  IconGift,
  IconMovie,
} from '@tabler/icons-react';

import NavGrid from '~/components/Navigation/NavGrid';
import { NavLinkProps } from '~/components/Navigation/Navigation.types';

const interests: NavLinkProps[] = [
  {
    icon: IconBooks,
    label: 'Books',
    href: 'interests/books',
    isExternal: false,
  },
  {
    icon: IconGift,
    label: 'Charity',
    href: 'interests/charity',
    isExternal: false,
  },
  {
    icon: IconCode,
    label: 'Coding',
    href: 'interests/coding',
    isExternal: false,
  },
  {
    icon: IconShoe,
    label: 'Dancing',
    href: 'interests/dancing',
    isExternal: false,
  },
  {
    icon: IconMovie,
    label: 'Movies',
    href: 'interests/movies',
    isExternal: false,
  },
  {
    icon: IconMusic,
    label: 'Music',
    href: 'interests/music',
    isExternal: false,
  },
  {
    icon: IconQuote,
    label: 'Quotes',
    href: 'interests/quotes',
    isExternal: false,
  },
  {
    icon: IconDeviceTvOld,
    label: 'TV',
    href: 'interests/tv',
    isExternal: false,
  },
  {
    icon: IconTypography,
    label: 'Words',
    href: 'interests/words',
    isExternal: false,
  },
];

export default function InterestsGrid() {
  return <NavGrid items={interests} />;
}
