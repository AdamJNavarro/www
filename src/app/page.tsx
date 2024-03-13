import Image from 'next/image';
import { Suspense } from 'react';
import routes from './config/routes';
import Navigation from '~/components/common/Navigation';
import BookRead from './home/ActivityDashboard/BookRead';
import { getLatestStarredRepo } from './data/github';
import { getLatestStravaActivity } from './data/strava';
import { getLatestLikedSongs } from './data/spotify';
import WordLearned from './home/ActivityDashboard/WordLearned';
import StravaSession from './home/ActivityDashboard/StravaSession';
import StarredRepo from './home/ActivityDashboard/StarredRepo';
import SongLiked from './home/ActivityDashboard/SongLiked';
import Dashboard from './home/ActivityDashboard/Dashboard';
import { getLatestWord } from './data/db/queries';
import MovieWatched from './home/ActivityDashboard/MovieWatched';
import ShowWatched from './home/ActivityDashboard/ShowWatched';

const showcaseRoutes = [routes.interests, routes.uses, routes.social];

const interestsRoutes = [
  routes.books,
  routes.charity,
  routes.coding,
  routes.dancing,
  routes.movies,
  routes.music,
  routes.quotes,
  routes.tv,
  routes.words,
];

export default async function HomePage() {
  return (
    <section>
      <Image
        src="/img/home-photo.jpg"
        priority
        height={240}
        width={240}
        alt="adam-home-photo"
        className="rounded-full h-60 w-60 mx-auto mb-8"
      />
      <div className="text-center mb-16">
        <p className="font-medium text-xl text-zinc-800 dark:text-violet-400 desktop:text-2xl">
          Find Passion. Foster Passion.
        </p>
      </div>
      <div className="grid gap-x-4 desktop:gap-x-8 grid-cols-3 w-full justify-between mb-16">
        {showcaseRoutes.map((item) => (
          <Navigation.Tile key={item.label} {...item} />
        ))}
      </div>

      <DummyProseSection />

      <div className="mb-16">
        <h2 className="text-center font-semibold text-xl text-black mb-8 dark:text-white desktop:text-xl">
          Latest Activity
        </h2>

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
          className="text-center font-semibold text-xl text-black mb-8 dark:text-white desktop:text-xl"
        >
          Interests
        </h2>
        <div className="grid gap-1.5 grid-cols-2  tablet:grid-cols-3">
          {interestsRoutes.map((item) => (
            <Navigation.Tile key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
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

//transition-transform duration-200 ease-in-out hover:scale-105

function DummyProseSection() {
  return (
    <div className="prose dark:prose-invert mx-auto mb-16">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis
        bibendum. Quis blandit turpis cursus in hac. Ac odio tempor orci dapibus.
        Ornare lectus sit amet est. Sed vulputate odio ut enim blandit. Elementum
        nibh tellus molestie nunc non blandit massa enim nec. Natoque penatibus et
        magnis dis parturient montes nascetur. Enim praesent elementum facilisis leo
        vel fringilla est ullamcorper. Rhoncus urna neque viverra justo nec ultrices
        dui sapien eget. Felis donec et odio pellentesque diam volutpat commodo sed.
        Ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Faucibus
        interdum posuere lorem ipsum.
      </p>
      {/* <p>
        Massa tempor nec feugiat nisl pretium. At in tellus integer feugiat
        scelerisque varius. Sem viverra aliquet eget sit amet tellus cras adipiscing.
        Tellus orci ac auctor augue mauris. Sit amet commodo nulla facilisi nullam
        vehicula ipsum. Eget velit aliquet sagittis id consectetur purus.
        Pellentesque adipiscing commodo elit at. Blandit aliquam etiam erat velit.
        Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Turpis
        massa sed elementum tempus egestas sed sed risus. Augue neque gravida in
        fermentum et sollicitudin ac. Scelerisque viverra mauris in aliquam sem
        fringilla ut. Velit euismod in pellentesque massa placerat duis ultricies.
        Nibh ipsum consequat nisl vel. Libero enim sed faucibus turpis in eu mi
        bibendum. Purus in massa tempor nec feugiat nisl.
      </p> */}
    </div>
  );
}
