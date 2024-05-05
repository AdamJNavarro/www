'use client';

import { useEffect, useState } from 'react';
import { formatDate } from '~/utils/Dates';
import { getPaginatedWords } from '../data/db/queries';
import { useInView } from 'react-intersection-observer';

const NUM_TO_FETCH = 10;

export default function WordsList({ initialWords }: any) {
  const [offset, setOffset] = useState(NUM_TO_FETCH);
  const [words, setWords] = useState<any[]>(initialWords);
  const { ref, inView } = useInView();

  const loadMoreWords = async () => {
    const { data, error } = await getPaginatedWords(offset, NUM_TO_FETCH);
    if (!data) return;
    setWords([...words, ...data]);
    setOffset(offset + NUM_TO_FETCH);
  };
  useEffect(() => {
    if (inView) {
      loadMoreWords();
    }
  }, [inView]);

  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-4 grid-cols-1 desktop:grid-cols-2">
        {words.map((item) => (
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
      <div ref={ref}>Loading...</div>
    </div>
  );
}
