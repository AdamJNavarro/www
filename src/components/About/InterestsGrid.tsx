import React from 'react';
import {
  IconMusic,
  IconBooks,
  IconDeviceTvOld,
  IconQuote,
  IconShoe,
  IconTypography,
  IconGift,
} from '@tabler/icons-react';

import NavGrid from '../Navigation/NavGrid';
import { NavLinkProps } from '../Navigation/Navigation.types';

const interests: NavLinkProps[] = [
  {
    icon: IconBooks,
    label: 'Books',
    href: '/books',
    isExternal: false,
  },
  {
    icon: IconGift,
    label: 'Charity',
    href: '/charity-game',
    isExternal: false,
  },
  {
    icon: IconShoe,
    label: 'Dancing',
    href: '/dancing',
    isExternal: false,
  },
  {
    icon: IconMusic,
    label: 'Music',
    href: '/music',
    isExternal: false,
  },
  {
    icon: IconQuote,
    label: 'Quotes',
    href: '/quotes',
    isExternal: false,
  },
  {
    icon: IconDeviceTvOld,
    label: 'TV',
    href: '/tv',
    isExternal: false,
  },
  {
    icon: IconTypography,
    label: 'Words',
    href: '/words',
    isExternal: false,
  },
];

export default function InterestsGrid() {
  return <NavGrid items={interests} />;
}
