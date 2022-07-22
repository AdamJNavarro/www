import React from 'react';
import {
  Music,
  Books,
  DeviceTvOld,
  Quote,
  Shoe,
  Typography,
} from 'tabler-icons-react';

import NavGrid from '../Navigation/NavGrid';
import { NavLinkProps } from '../Navigation/Navigation.types';

const interests: NavLinkProps[] = [
  {
    icon: Shoe,
    label: 'Dancing',
    href: '/dancing',
    isExternal: false,
  },
  {
    icon: Music,
    label: 'Music',
    href: '/music',
    isExternal: false,
  },
  {
    icon: Typography,
    label: 'Words',
    href: '/words',
    isExternal: false,
  },
  {
    icon: Books,
    label: 'Books',
    href: '/books',
    isExternal: false,
  },
  {
    icon: DeviceTvOld,
    label: 'TV',
    href: '/tv',
    isExternal: false,
  },
  {
    icon: Quote,
    label: 'Quotes',
    href: '/quotes',
    isExternal: false,
  },
];

export default function InterestsGrid() {
  return <NavGrid items={interests} />;
}
