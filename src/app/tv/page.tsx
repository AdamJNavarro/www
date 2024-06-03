import routes from '~/app/config/routes';

import Trakt from './trakt';
import { DataAttribution } from '~/components/common/Attribution';

export const { metadata } = routes.tv;

export default async function TvPage() {
  return (
    <div>
      <h1 className="page-h1 text-center">Television</h1>

      <Trakt />
      <div className="mt-24">
        <DataAttribution sources={['trakt']} />
      </div>
    </div>
  );
}
