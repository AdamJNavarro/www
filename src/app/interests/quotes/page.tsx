import routes from '~/app/config/routes';
import Quotes from './Quotes';

export const { metadata } = routes.quotes;

export default async function Page() {
  return <Quotes />;
}
