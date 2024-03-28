import routes from '~/app/config/routes';
import DancingPerformances from './DancingPerformances';
import { Page } from '~/components/Layouts/Page';

export const { metadata } = routes.dancing;

export default async function DancingPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Dancing</Page.Title>
        <p>If there is a dance floor, you will find me on it.</p>
      </Page.Header>
      <DancingPerformances />
    </div>
  );
}
