import { Suspense } from 'react';
import routes from '~/app/config/routes';
import { getWords } from '~/app/data/db/queries';
import { Page } from '~/components/common';
import WordsList from './WordsList';
import { LoadingSpinner } from '~/components/common/pure-html';
import { auth } from '~/app/auth';

export const { metadata } = routes.words;

export default async function WordsPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Words</Page.Title>
          <Page.Description>
            An ever-growing list of words I encountered and did not know. I began
            logging mid-2018.
          </Page.Description>
        </Page.Header>
        <WordBank />
      </Page.Content>
    </Page.Container>
  );
}

async function WordBank() {
  const session = await auth();
  const { data, error } = await getWords();

  if (error) return null;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <WordsList
        data={data}
        showAddButton={session && session?.user?.email === 'adamjnav@gmail.com'}
      />
    </Suspense>
  );
}
