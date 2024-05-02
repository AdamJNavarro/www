import { Page } from '~/components/Layouts/Page';
import routes from '../config/routes';
import { Suspense } from 'react';
import { LoadingSpinner } from '~/components/common/pure-html';
import StravaHeatmap from './StravaHeatmap';
import { DataAttribution } from '~/components/common/Attribution';

export const { metadata } = routes.fitness;

export default async function FitnessPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Fitness</Page.Title>
        <Page.Description>What I do to keep my body healthy.</Page.Description>
      </Page.Header>
      <p className="prose max-w-none mb-24">
        For as long as I can remember, fitness has been a major part of my life.
        Growing up I played baseball, basketball, football and most of my free time
        was spent either playing neighborhood games (think Kick the Can, Ghost in the
        Graveyard, etc.) or jumping on a trampoline. When I got to highschool, I
        became enamored with the weight room and shortly thereafter found my way onto
        the wrestling team. Four years of wrestling and the accompanying team gym
        sessions instilled a love for lifting weights that has been going strong for
        a decade plus.
      </p>
      <Suspense fallback={<LoadingSpinner />}>
        <StravaHeatmap />
      </Suspense>
      <div className="mt-24">
        <DataAttribution sources={['strava']} />
      </div>
    </div>
  );
}
