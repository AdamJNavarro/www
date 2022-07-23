import NavGrid from '../Navigation/NavGrid';
import { buildSocialUrl } from './helpers';
import { SocialPlatforms } from './Social.data';

export default function SocialShowcase() {
  return (
    <NavGrid
      items={SocialPlatforms.map((item) => ({
        ...item,
        href: buildSocialUrl(item.href),
        isExternal: true,
      }))}
    />
  );
}
