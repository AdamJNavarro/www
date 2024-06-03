import Image from 'next/image';
import { Suspense } from 'react';
import routes from './config/routes';
import Navigation from '~/components/common/Navigation';
import BookRead from './home/BookRead';
import { getLatestStarredRepo } from './data/github';
import { getStravaActivities } from './data/strava';
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
import { getAge } from '~/utils/Dates';

const interestsRoutes = [
  routes.books,
  routes.coding,
  routes.dance,
  routes.fitness,
  routes.movies,
  routes.music,
  routes.tv,
  routes.words,
];

export default async function HomePage() {
  return (
    <div data-cy="home-page" className="bg-slate-950">
      <Image
        src="/img/home-photo.jpg"
        priority
        height={240}
        width={240}
        alt="adam-home-photo"
        className="rounded-full h-60 w-60 mx-auto mb-8"
      />
      <div className="text-center mb-16">
        <p className="animate-slogan font-medium text-lg text-slate-700 dark:text-slate-300">
          Find Passion. Foster Passion.
        </p>
      </div>

      <Intro />

      <div className="prose">
        <h2 className="text-center">Latest Activity</h2>
      </div>
      <div className="mt-16 mb-24">
        <div className="grid gap-6 grid-cols-1 desktop:grid-cols-2">
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

      <div className="prose">
        <h2 id="interests" className="text-center">
          Interests
        </h2>
      </div>
      <div className="mt-16 mb-24">
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))]">
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
  const { data, error } = await getStravaActivities({
    params: `per_page=1`,
  });

  if (error) return null;

  return <StravaSession data={data[0]} />;
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

//const myBirthday = new Date(1992, 10, 22);
const aceBirthday = new Date(2019, 9, 19);

function Intro() {
  return (
    <div className="prose mb-16 mx-auto">
      <p>
        Hey there, my name is Adam! I’m a{' '}
        <Link href={routes.coding.href}>coder</Link>, fitness enthusiast, music &
        dance lover, and a dog owner to a {getAge(aceBirthday)}-year-old Soft-coated
        Wheaten Terrier named Ace. Feel free to explore my website to get to know
        more about me, my <Link href="#interests">interests</Link> and things I have
        created. You can also reach out to me on any of the platforms listed on my{' '}
        <Link href={routes.social.href}>social</Link> page. I’d love to hear from
        you!
      </p>
    </div>
  );
}
