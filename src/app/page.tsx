import Image from 'next/image';
import { Suspense } from 'react';
import routes from './config/routes';
import Navigation from '~/components/common/Navigation';
import BookRead from './home/BookRead';
import { getLatestStarredRepo } from './data/github';
import { getLatestStravaActivity } from './data/strava';
import { getLatestLikedSongs } from './data/spotify';
import WordLearned from './home/WordLearned';
import StravaSession from './home/StravaSession';
import StarredRepo from './home/StarredRepo';
import SongLiked from './home/SongLiked';
import Dashboard from './home/Dashboard';
import { getLatestWord } from './data/db/queries';
import MovieWatched from './home/MovieWatched';
import ShowWatched from './home/ShowWatched';
import Link from 'next/link';

const interestsRoutes = [
  routes.books,
  routes.dancing,
  routes.movies,
  routes.music,
  routes.tv,
  routes.words,
];

export default async function HomePage() {
  return (
    <div data-cy="home-page">
      <Image
        src="/img/home-photo.jpg"
        priority
        height={240}
        width={240}
        alt="adam-home-photo"
        className="rounded-full h-60 w-60 mx-auto mb-8"
      />
      <div className="text-center mb-16">
        <p className="font-medium text-xl text-zinc-800 dark:text-slate-300 desktop:text-2xl">
          Find Passion. Foster Passion.
        </p>
      </div>

      <Intro />

      <div>
        <h2 className="text-center font-bold tracking-tight text-2xl dark:text-slate-200">
          Latest Activity
        </h2>
      </div>
      <div className="mt-8 mb-24">
        <div className="grid gap-4 grid-cols-1 desktop:grid-cols-2">
          <BookRead />
          <MovieWatched />
          <ShowWatched />
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
        </div>
      </div>

      <div>
        <h2
          id="interests"
          className="text-center font-bold tracking-tight text-2xl dark:text-slate-200"
        >
          Interests
        </h2>
      </div>
      <div className="mt-8 mb-24">
        <div className="grid gap-1.5 grid-cols-2  tablet:grid-cols-3">
          {interestsRoutes.map((item) => (
            <Navigation.Tile key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
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

function Intro() {
  return (
    <div className="prose dark:prose-invert mx-auto mb-16">
      <p>
        Hey there, my name is Adam! I’m a software developer, fitness enthusiast,
        music & dance lover, and a dog owner to a 4-year-old Soft-coated Wheaten
        Terrier named Ace. Feel free to explore my website to get to know more about
        me, my interests and things I have created. You can also reach out to me on
        any of the platforms listed on my{' '}
        <Link href={routes.social.href}>socials</Link> page. I’d love to hear from
        you!
      </p>
    </div>
  );
}
