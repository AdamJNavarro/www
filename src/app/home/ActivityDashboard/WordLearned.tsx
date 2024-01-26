import { useState } from 'react';
import { wordBank } from '~/app/words/Words.data';
import { WordProps } from '~/app/words/Words.types';
import { buildMerriamWebsterUrl, sortWords } from '~/app/words/Words.utils';
import Dashboard from './Dashboard';

export default function WordLearned() {
  const [word] = useState<WordProps>(sortWords(wordBank, 'recent')[0]);

  return (
    <Dashboard.Card
      label="Word Learned"
      href={buildMerriamWebsterUrl(word.spelling)}
      loading={false}
      logo="https://res.cloudinary.com/dkddfip9j/image/upload/v1664659090/logos/merriam-webster.png"
    >
      <Dashboard.Title tt="capitalize">{word.spelling}</Dashboard.Title>

      <Dashboard.Details>{word.definition}.</Dashboard.Details>
    </Dashboard.Card>
  );
}
