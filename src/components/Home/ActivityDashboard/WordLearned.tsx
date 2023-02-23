import { useState } from 'react';
import { wordBank } from '~/components/Words/Words.data';
import { WordProps } from '~/components/Words/Words.types';
import { buildMerriamWebsterUrl, sortWords } from '~/components/Words/Words.utils';
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
      <Dashboard.Title transform="capitalize">{word.spelling}</Dashboard.Title>

      <Dashboard.Details>{word.definition}.</Dashboard.Details>
    </Dashboard.Card>
  );
}
