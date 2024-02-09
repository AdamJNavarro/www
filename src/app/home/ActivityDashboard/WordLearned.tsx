import { useState } from 'react';
import { wordBank } from '~/app/interests/words/Words.data';
import { WordProps } from '~/app/interests/words/Words.types';
import {
  buildMerriamWebsterUrl,
  sortWords,
} from '~/app/interests/words/Words.utils';
import Dashboard from './Dashboard';

export default function WordLearned() {
  const [word] = useState<WordProps>(sortWords(wordBank, 'recent')[0]);

  return (
    <Dashboard.Card
      label="Word Learned"
      href={buildMerriamWebsterUrl(word.spelling)}
      logo="/img/logos/merriam-webster.svg"
    >
      <Dashboard.Title tt="capitalize">{word.spelling}</Dashboard.Title>

      <Dashboard.Details>{word.definition}.</Dashboard.Details>
    </Dashboard.Card>
  );
}
