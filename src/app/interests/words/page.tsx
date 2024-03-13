import { Suspense } from 'react';
import routes from '~/app/config/routes';
import { getWords } from '~/app/data/db/queries';
import WordsList from './WordsList';
import { LoadingSpinner } from '~/components/common/pure-html';
import { auth } from '~/app/auth';
import { formatDate } from '~/utils';

export const { metadata } = routes.words;

export default async function WordsPage() {
  return (
    <>
      <WordBank />
    </>
  );

  // return (
  //   <Page.Container>
  //     <Page.Content>
  //       <Page.Header>
  //         <Page.Title>Words</Page.Title>
  //         <Page.Description>
  //           An ever-growing list of words I encountered and did not know. I began
  //           logging mid-2018.
  //         </Page.Description>
  //       </Page.Header>
  //       <WordBank />
  //     </Page.Content>
  //   </Page.Container>
  // );
}

async function WordBank() {
  const session = await auth();
  const { data, error } = await getWords();

  if (error) return null;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      {/* <WordsList
        data={data}
        showAddButton={session && session?.user?.email === 'adamjnav@gmail.com'}
      /> */}
      <div className="grid gap-4 grid-cols-1 desktop:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.spelling}
            className="rounded-md p-4 bg-slate-900/80 flex flex-col  dark:border dark:border-slate-800"
          >
            <div className="flex items-center justify-between gap-4 mb-4 ">
              <div className="flex items-center justify-start gap-1">
                <div className="text-lg text-slate-200">{item.spelling}</div>
                <div className="text-sm text-slate-400">({item.partOfSpeech})</div>
              </div>
              <div className="text-xs text-slate-400">
                {formatDate(String(item.dateLearned))}
              </div>
            </div>
            <div className="flex flex-col justify-center text-base text-slate-300/95 leading-tight">
              {item.definition}.
            </div>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
