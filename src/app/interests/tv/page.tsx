import routes from '~/app/config/routes';
import TV from './TV';

export const { metadata } = routes.tv;

export default async function Page() {
  return <TV />;
}
