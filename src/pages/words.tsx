import { useEffect, useState } from 'react';
import { CenteredColumn, Page, PageHeader } from '~/components/layout';
import { collection, getDocs, query, orderBy } from 'firebase/firestore/lite';

import { firestore } from '~/firebase';

export default function WordsPage() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    try {
      const queryData = await getDocs(
        query(collection(firestore, 'words'), orderBy('term'))
      );
      const words = queryData.docs.map((doc) => doc.data());
      setWords(words);
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            subtitle="An ever-growing list, beginning from mid-2018, of words I've encountered and did not know."
            title="Words"
          />
          {words.length && (
            <div className="prose">
              {words.map((word: any) => {
                const { term, definition } = word;
                return (
                  <p key={term}>
                    <a
                      className="capitalize"
                      href={`https://www.merriam-webster.com/dictionary/${encodeURIComponent(
                        term
                      )}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {term}
                    </a>{' '}
                    - {definition}.
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </CenteredColumn>
    </Page>
  );
}
