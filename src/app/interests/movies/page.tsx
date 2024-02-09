import routes from '~/app/config/routes';
import Movies from './Movies';

export const { metadata } = routes.movies;

export default async function Page() {
  return <Movies />;
}
