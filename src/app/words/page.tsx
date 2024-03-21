import { Suspense } from 'react';
import routes from '~/app/config/routes';
import { getWords } from '~/app/data/db/queries';
import { LoadingSpinner } from '~/components/common/pure-html';
import { auth } from '~/app/auth';
import { Page } from '~/components/Layouts/Page';

export const { metadata } = routes.words;

export default async function WordsPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Words</Page.Title>
        <p>
          An ever-growing list of words I encountered and did not know. I began
          logging mid-2018.
        </p>
      </Page.Header>
      <WordBank />
    </div>
  );
}

async function WordBank() {
  const session = await auth();
  const { data, error } = await getWords();

  if (error) return null;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="grid gap-4 grid-cols-1 desktop:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.spelling}
            className="rounded-md p-4 bg-slate-900/80 flex flex-col  dark:border dark:border-slate-800"
          >
            <div className="flex items-center justify-between gap-4 mb-4 ">
              <div className="flex items-center justify-start gap-1">
                <div className="text-lg text-surface-primary">{item.spelling}</div>
                {/* <div className="text-sm text-slate-400">
                  ({getShortenedPartOfSpeech(item.partOfSpeech)})
                </div> */}
              </div>
              {/* <div className="text-xs text-slate-400">
                {formatDate(String(item.dateLearned))}
              </div> */}
            </div>
            <div className="flex flex-col justify-center text-base text-surface-tertiary leading-tight">
              {item.definition}.
            </div>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
