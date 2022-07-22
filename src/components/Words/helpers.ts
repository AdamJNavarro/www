import { sortByAbc } from '~/utils';
import { WordPart, WordProps, WordSortingMode } from './Words.types';

export function sortWords(
  data: WordProps[],
  sortMode: WordSortingMode
): WordProps[] {
  if (sortMode === 'recent') {
    return [...data].sort(
      (a: WordProps, b: WordProps) =>
        // @ts-ignore
        new Date(b.dateLearned) - new Date(a.dateLearned)
    );
  }

  return sortByAbc({ data, key: 'spelling', reverse: sortMode === 'reverse-abc' });
}

export function getPartOfSpeechColor(partOfSpeech: WordPart): string {
  if (partOfSpeech === 'adjective') return 'green';
  if (partOfSpeech === 'noun') return 'blue';
  if (partOfSpeech === 'verb') return 'grape';
  return 'white';
}

export function buildMerriamWebsterUrl(word: string): string {
  return `https://www.merriam-webster.com/dictionary/${encodeURIComponent(word)}`;
}
