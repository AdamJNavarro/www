import routes from '~/app/config/routes';
import Charity from './Charity';

export const { metadata } = routes.charity;

export default async function Page() {
  return <Charity />;
}
