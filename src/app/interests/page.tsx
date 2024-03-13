import Navigation from '~/components/common/Navigation';
import routes from '../config/routes';

export const { metadata } = routes.interests;

const items = [
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

export default async function InterestsPage() {
  return (
    <section>
      <h1 className="font-bold text-lg text-black dark:text-white sm:text-xl">
        Interests
      </h1>
      <p className="text-md text-zinc-800 dark:text-zinc-300 sm:text-md">
        Learn more about what I enjoy
      </p>
      <div className="grid gap-1.5 grid-cols-2  tablet:grid-cols-3">
        {items.map((item) => (
          <Navigation.Tile key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}
