'use client';

import Navigation from '~/components/common/Navigation';
import { SocialPlatforms } from './Social.data';

export default function SocialShowcase() {
  return (
    <Navigation.Grid
      items={SocialPlatforms.filter((platform) => platform.show).map((item) => ({
        ...item,
        isExternal: true,
      }))}
    />
  );
}
