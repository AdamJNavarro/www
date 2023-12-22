import NavGrid from '~/components/Navigation/NavGrid';
import { SocialPlatforms } from './Social.data';

export default function SocialShowcase() {
  return (
    <NavGrid
      items={SocialPlatforms.filter((platform) => platform.show).map((item) => ({
        ...item,
        isExternal: true,
      }))}
    />
  );
}
