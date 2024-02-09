import routes from '~/app/config/routes';
import Words from './Words';

export const { metadata } = routes.words;

export default async function Page() {
  return <Words />;
}
