import routes from '~/app/config/routes';
import Dancing from './Dancing';

export const { metadata } = routes.dancing;

export default async function Page() {
  return <Dancing />;
}
