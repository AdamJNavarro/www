import NavGrid from '../Navigation/NavGrid';
import { SocialPlatforms } from './Social.data';

export default function SocialShowcase() {
  return (
    <NavGrid
      items={SocialPlatforms.map((item) => ({ ...item, isExternal: true }))}
    />
  );
}
