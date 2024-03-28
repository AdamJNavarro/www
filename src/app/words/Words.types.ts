type WordSortingMode = 'abc' | 'reverse-abc' | 'recent';

type WordPart =
  | 'adjective'
  | 'adverb'
  | 'conjunction'
  | 'interjection'
  | 'noun'
  | 'preposition'
  | 'pronoun'
  | 'verb';

interface WordProps {
  dateLearned: number;
  definition: string;
  partOfSpeech: WordPart;
  spelling: string;
}

export type { WordSortingMode, WordPart, WordProps };
