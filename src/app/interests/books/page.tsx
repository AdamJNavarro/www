import routes from '~/app/config/routes';
import Books from './Books';

export const { metadata } = routes.books;

export default async function Page() {
  return <Books />;
}
