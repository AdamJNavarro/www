import { Suspense } from 'react';
import { Section } from '~/components/common';
import FavoriteArtists from './Artists';
import FavoritePodcasts from './Podcasts';
import RecentlyLikedTracks from './Tracks';
import {
  getLatestLikedSongs,
  getSpotifyArtists,
  getSpotifyPodcasts,
} from '~/app/data/spotify';
import { LoadingSpinner } from '~/components/common/pure-html';

export default function SpotifyContent() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SpotifyData />
    </Suspense>
  );
}

async function SpotifyData() {
  const tracksData = getLatestLikedSongs({ limit: 6 });
  const artistsData = getSpotifyArtists();
  const podcastsData = getSpotifyPodcasts();
  const [tracks, artists, podcasts] = await Promise.all([
    tracksData,
    artistsData,
    podcastsData,
  ]);

  return (
    <>
      <Section.Container>
        <Section.Header>
          <Section.Title>Recently Liked Tracks</Section.Title>
        </Section.Header>
        <Section.Content>
          <RecentlyLikedTracks data={tracks} />
        </Section.Content>
      </Section.Container>

      <Section.Container>
        <Section.Header>
          <Section.Title>Favorite Artists</Section.Title>
        </Section.Header>
        <Section.Content>
          <FavoriteArtists data={artists} />
        </Section.Content>
      </Section.Container>

      <Section.Container>
        <Section.Header>
          <Section.Title>Favorite Podcasts</Section.Title>
        </Section.Header>
        <Section.Content>
          <FavoritePodcasts data={podcasts} />
        </Section.Content>
      </Section.Container>
    </>
  );
}
