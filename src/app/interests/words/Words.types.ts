type WordSortingMode = 'abc' | 'reverse-abc' | 'recent';

type WordDisplayMode = 'grid' | 'table';

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
  //id: any;
}

export type { WordSortingMode, WordDisplayMode, WordPart, WordProps };
