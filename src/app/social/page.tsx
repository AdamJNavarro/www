import routes from '../config/routes';
import Social from './Social';

export const { metadata } = routes.social;

export default async function Page() {
  return <Social />;
}
