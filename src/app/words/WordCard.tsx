import { Badge, Group, Text } from '@mantine/core';
import { buildMerriamWebsterUrl, getPartOfSpeechColor } from './Words.utils';
import { WordProps } from './Words.types';
import Navigation from '~/components/common/Navigation';

export default function WordCard({ partOfSpeech, spelling, definition }: WordProps) {
  return (
    <Navigation.Card href={buildMerriamWebsterUrl(spelling)} isExternal>
      <Group justify="space-between" mb="xs">
        <Text fw={700} tt="capitalize">
          {spelling}
        </Text>

        {/* <Badge color={getPartOfSpeechColor(partOfSpeech)} size="sm" variant="light">
          {partOfSpeech}
        </Badge> */}
      </Group>

      <Text c="dimmed" size="md" style={{ lineHeight: 1.5 }}>
        {definition}.
      </Text>
    </Navigation.Card>
  );
}
