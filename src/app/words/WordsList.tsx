import { Group, rem } from '@mantine/core';
import { useState } from 'react';
import { DataGrid } from '../../components/common/Grid';
import { sortWords } from './Words.utils';
import WordCard from './WordCard';
import { wordBank } from './Words.data';
import { WordDisplayMode, WordProps, WordSortingMode } from './Words.types';
import WordSortingToggle, { WordsDisplayToggle } from './WordSortingToggle';

export default function WordsList() {
  //const [displayMode, setDisplayMode] = useState<WordDisplayMode>('grid');
  const [sortMode, setSortMode] = useState<WordSortingMode>('recent');
  const [sortedWords, setSortedWords] = useState<WordProps[]>(
    sortWords(wordBank, sortMode)
  );

  return (
    <div>
      <Group
        justify="space-between"
        style={{
          marginTop: 'calc(var(--mantine-spacing-xl) * 2)',
          marginBottom: 'var(--mantine-spacing-xl)',
        }}
      >
        <WordSortingToggle
          onChange={(value: WordSortingMode) => {
            setSortMode(value);
            setSortedWords(sortWords(sortedWords, value));
          }}
          value={sortMode}
        />
        {/*  <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <WordsDisplayToggle
            onChange={(value: WordDisplayMode) => {
              setDisplayMode(value);
            }}
            value={displayMode}
          />
        </MediaQuery> */}
      </Group>
      <DataGrid
        config={{
          cols: { base: 1, md: 2 },
          spacing: { base: 'md', sm: 'lg', lg: 'xl' },
        }}
        error={undefined}
        loading={false}
        placeholder={<div style={{ height: rem(100), width: '100%' }} />}
        placeholderCount={8}
      >
        {sortedWords.map((word) => (
          <WordCard key={`key-${word.spelling}`} {...word} />
        ))}
      </DataGrid>
    </div>
  );
}
