import Image from 'next/image';
import routes from './config/routes';
import Navigation from '~/components/common/Navigation';

const items = [routes.interests, routes.uses, routes.social];

export default async function HomePage() {
  return (
    <section>
      <Image
        src="/img/home-photo.jpg"
        priority
        height={256}
        width={256}
        alt="adam-home-photo"
        className="rounded-full h-64 w-64 mx-auto mb-12"
      />
      <div className="text-center mb-12">
        <h1 className="font-semibold text-xl text-black dark:text-white sm:text-2xl">
          Adam Navarro
        </h1>
        <p className="font-light text-lg text-zinc-800 dark:text-zinc-400 sm:text-xl">
          Find Passion. Foster Passion.
        </p>
      </div>
      <div className="grid gap-x-8 grid-cols-3 w-full sm:w-3/4 mx-auto justify-between">
        {items.map((item) => (
          <Navigation.Tile key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

//transition-transform duration-200 ease-in-out hover:scale-105
