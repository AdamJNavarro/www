import routes from '../config/routes';
import Navigation from '~/components/common/Navigation';

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

export default function InterestsGrid() {
  return <Navigation.Grid items={items} />;
}
