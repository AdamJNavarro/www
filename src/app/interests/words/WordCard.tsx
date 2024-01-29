import { Badge, Group, Text, rem } from '@mantine/core';
import { buildMerriamWebsterUrl, getPartOfSpeechColor } from './Words.utils';
import { WordProps } from './Words.types';
import Navigation from '~/components/common/Navigation';

export default function WordCard({ partOfSpeech, spelling, definition }: WordProps) {
  return (
    <Navigation.Card href={buildMerriamWebsterUrl(spelling)} isExternal>
      <Group mb="xs">
        <Text fw={600} tt="capitalize">
          {spelling}
        </Text>

        <Badge
          color="violet.2"
          size="xs"
          variant="light"
          styles={{ label: { fontSize: 10 } }}
        >
          {partOfSpeech}
        </Badge>
      </Group>

      <Text c="dimmed" size="md" style={{ lineHeight: 1.5 }}>
        {definition}.
      </Text>
    </Navigation.Card>
  );
}
