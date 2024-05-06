import { Suspense } from 'react';
import routes from '~/app/config/routes';
import { getPaginatedWords } from '~/app/data/db/queries';
import { LoadingSpinner } from '~/components/common/pure-html';
import { auth } from '~/app/auth';
import { Page } from '~/components/Layouts/Page';
import WordForm from './WordForm';
import WordsList from './WordsList';

export const { metadata } = routes.words;

export default async function WordsPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Words</Page.Title>
        <Page.Description>
          An ever-growing list of words I encountered and did not know. I began
          logging mid-2018.
        </Page.Description>
      </Page.Header>
      <Suspense fallback={<LoadingSpinner />}>
        <WordBank />
      </Suspense>
    </div>
  );
}

async function WordBank() {
  const session = await auth();
  const { data, error } = await getPaginatedWords({ offset: 0, limit: 20 });

  if (error) return null;

  return (
    <div>
      {session && session?.user?.email === 'adamjnav@gmail.com' && (
        <div className="my-24">
          <WordForm />
        </div>
      )}
      <WordsList initialWords={data} />
    </div>
  );
}
