import { Suspense } from 'react';
import { Page, Section } from '~/components/common';
import { getLatestWord } from './data/db/queries';
import HomeShowcase from './home/HomeShowcase';
import ActivityDashboard from './home/ActivityDashboard';
import { getLatestStarredRepo } from './data/github';
import { getLatestStravaActivity } from './data/strava';
import { getLatestLikedSongs } from './data/spotify';
import WordLearned from './home/ActivityDashboard/WordLearned';
import StravaSession from './home/ActivityDashboard/StravaSession';
import StarredRepo from './home/ActivityDashboard/StarredRepo';
import SongLiked from './home/ActivityDashboard/SongLiked';
import Dashboard from './home/ActivityDashboard/Dashboard';

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
            <ActivityDashboard>
              <Suspense fallback={<Dashboard.Loading />}>
                <LatestWord />
              </Suspense>
              <Suspense fallback={<Dashboard.Loading />}>
                <LatestStrava />
              </Suspense>
              <Suspense fallback={<Dashboard.Loading />}>
                <LatestGithubRepoStarred />
              </Suspense>
              <Suspense fallback={<Dashboard.Loading />}>
                <LatestSpotifyTrack />
              </Suspense>
            </ActivityDashboard>
          </Section.Content>
        </Section.Container>
      </Page.Content>
    </Page.Container>
  );
}

async function LatestWord() {
  const { data, error } = await getLatestWord();

  if (error) return null;

  return <WordLearned data={data} />;
}

async function LatestStrava() {
  const { data, error } = await getLatestStravaActivity();

  if (error) return null;

  return <StravaSession data={data} />;
}

async function LatestGithubRepoStarred() {
  const { data, error } = await getLatestStarredRepo();

  if (error) return null;

  return <StarredRepo data={data} />;
}

async function LatestSpotifyTrack() {
  const { data, error } = await getLatestLikedSongs({ limit: 1 });

  if (error) return null;

  return <SongLiked data={data} />;
}
