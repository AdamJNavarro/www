import { Group, rem } from '@mantine/core';
import { useState } from 'react';
import { DataGrid } from '../common/Grid';
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
        position="apart"
        sx={(theme) => ({
          marginTop: `calc(${theme.spacing.xl} * 2)`,
          marginBottom: theme.spacing.xl,
        })}
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
          cols: 3,
          spacing: 'xl',
          breakpoints: [
            { maxWidth: 'xl', cols: 3, spacing: 'xl' },
            { maxWidth: 'lg', cols: 3, spacing: 'lg' },
            { maxWidth: 'md', cols: 2, spacing: 'md' },
            { maxWidth: 'sm', cols: 1, spacing: 'sm' },
            { maxWidth: 'xs', cols: 1, spacing: 'xs' },
          ],
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
