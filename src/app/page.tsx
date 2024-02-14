import { Suspense } from 'react';
import { Page, Section } from '~/components/common';
import { getLatestWord } from './data/db/queries';
import HomeShowcase from './home/HomeShowcase';
import ActivityDashboard, {
  ActivityDashboardLoading,
} from './home/ActivityDashboard';
import { getLatestStarredRepo } from './data/github';
import { getLatestStravaActivity } from './data/strava';
import { getLatestLikedSongs } from './data/spotify';
import { getTraktListItems } from './data/trakt';

export default async function HomePage() {
  return (
    <Page.Container data-cy="home-page">
      <Page.Content>
        <HomeShowcase />
        <Section.Container>
          <Section.Header>
            <Section.Title style={{ textAlign: 'center' }}>
              Latest Activity
            </Section.Title>
          </Section.Header>
          <Section.Content>
            <Suspense fallback={<ActivityDashboardLoading />}>
              <LatestActivities />
            </Suspense>
          </Section.Content>
        </Section.Container>
      </Page.Content>
    </Page.Container>
  );
}

async function LatestActivities() {
  const wordData = getLatestWord();
  const repoData = getLatestStarredRepo();
  const stravaData = getLatestStravaActivity();
  const spotifyData = getLatestLikedSongs({ limit: 1 });
  const traktData = getTraktListItems({ listId: 'history', limit: 1 });

  const [word, repo, strava, song, show] = await Promise.all([
    wordData,
    repoData,
    stravaData,
    spotifyData,
    traktData,
  ]);

  return <ActivityDashboard data={{ word, repo, strava, song, show: show[0] }} />;
}
