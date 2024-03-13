import routes from '~/app/config/routes';
import DancingPerformances from './DancingPerformances';

export const { metadata } = routes.dancing;

export default async function DancingPage() {
  return (
    <section>
      <div className="mb-16">
        <h1 className="pg-title">Dancing</h1>
        <p className="pg-desc">If there is a dance floor, you will find me on it.</p>
      </div>
      <DancingPerformances />
    </section>
  );
}
