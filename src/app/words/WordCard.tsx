import { Badge, Group, Text } from '@mantine/core';
import { Surface } from '~/components/common';
import { LinkText } from '~/components/common/Typography';
import { buildMerriamWebsterUrl, getPartOfSpeechColor } from './Words.utils';
import { WordProps } from './Words.types';

export default function WordCard({ partOfSpeech, spelling, definition }: WordProps) {
  return (
    <Surface.Card>
      <Group position="apart" mb="xs">
        <LinkText
          href={buildMerriamWebsterUrl(spelling)}
          isExternal
          style={{ fontWeight: 700, textTransform: 'capitalize' }}
        >
          {spelling}
        </LinkText>

        {/* <Badge color={getPartOfSpeechColor(partOfSpeech)} size="sm" variant="light">
          {partOfSpeech}
        </Badge> */}
      </Group>

      <Text color="dimmed" size="md" style={{ lineHeight: 1.5 }}>
        {definition}.
      </Text>
    </Surface.Card>
  );
}
