'use client';

import { Button, Group, rem } from '@mantine/core';
import { useState } from 'react';
import Link from 'next/link';
import { DataGrid } from '../../../components/common/Grid';
import { sortWords } from './Words.utils';
import WordCard from './WordCard';
import { WordProps, WordSortingMode } from './Words.types';
import WordSortingToggle from './WordSortingToggle';

export default function WordsList({ data, showAddButton }: any) {
  const [sortMode, setSortMode] = useState<WordSortingMode>('recent');
  const [sortedWords, setSortedWords] = useState<WordProps[]>(
    sortWords(data, sortMode)
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
        {showAddButton && (
          <Button
            component={Link}
            href="/interests/words/add-word"
            size="compact-sm"
            variant="light"
          >
            Add Word
          </Button>
        )}
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
