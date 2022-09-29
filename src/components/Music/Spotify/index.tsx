import { Section } from '~/components/common';
import FavoriteArtists from './Artists';
import FavoritePodcasts from './Podcasts';
import RecentlyLikedTracks from './Tracks';

export default function SpotifyContent() {
  return (
    <>
      <Section.Container>
        <Section.Header>
          <Section.Title>Recently Liked Tracks</Section.Title>
        </Section.Header>
        <Section.Content>
          <RecentlyLikedTracks />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Favorite Artists</Section.Title>
        </Section.Header>
        <Section.Content>
          <FavoriteArtists />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Favorite Podcasts</Section.Title>
        </Section.Header>
        <Section.Content>
          <FavoritePodcasts />
        </Section.Content>
      </Section.Container>
    </>
  );
}
