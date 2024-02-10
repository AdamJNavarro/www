import routes from '../config/routes';
import Uses from './Uses';

export const { metadata } = routes.uses;

export default async function Page() {
  return <Uses />;
}
