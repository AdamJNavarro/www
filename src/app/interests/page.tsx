import routes from '../config/routes';
import Interests from './Interests';

export const { metadata } = routes.interests;

export default async function Page() {
  return <Interests />;
}
