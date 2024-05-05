import { Suspense } from 'react';
import routes from '~/app/config/routes';
import { getPaginatedWords, getWords } from '~/app/data/db/queries';
import { LoadingSpinner } from '~/components/common/pure-html';
import { auth } from '~/app/auth';
import { Page } from '~/components/Layouts/Page';
import WordForm from './WordForm';
import { formatDate } from '~/utils/Dates';
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
        <TheWords />
      </Suspense>
    </div>
  );
}

async function TheWords() {
  const { data, error } = await getPaginatedWords(0, 10);

  if (error) return null;

  return <WordsList initialWords={data} />;
}

async function WordBank() {
  const session = await auth();
  const { data, error } = await getWords();

  if (error) return null;

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 desktop:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.spelling}
            className="rounded-md p-4 flex flex-col bg-surface border-surface shadow-md dark:shadow-none"
          >
            <div className="flex items-center justify-between gap-4 mb-4 ">
              <div className="flex items-center justify-start gap-1">
                <div className="text-lg text-surface-primary">{item.spelling}</div>
              </div>
              <div className="text-xs text-surface-tertiary">
                {formatDate({ date: String(item.dateLearned), format: 'short' })}
              </div>
            </div>
            <div className="flex flex-col justify-center font-light text-base text-surface-secondary leading-tight">
              {item.definition}.
            </div>
          </div>
        ))}
      </div>
      {session && session?.user?.email === 'adamjnav@gmail.com' && (
        <div className="my-24">
          <WordForm />
        </div>
      )}
    </div>
  );
}
