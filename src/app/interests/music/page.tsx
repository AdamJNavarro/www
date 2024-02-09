import routes from '~/app/config/routes';
import Music from './Music';

export const { metadata } = routes.music;

export default async function Page() {
  return <Music />;
}
