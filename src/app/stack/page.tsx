import routes from '../config/routes';
import Stack from './Stack';

export const { metadata } = routes.stack;

export default async function Page() {
  return <Stack />;
}
