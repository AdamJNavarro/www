import routes from '~/app/config/routes';
import Coding from './Coding';

export const { metadata } = routes.coding;

export default async function Page() {
  return <Coding />;
}
