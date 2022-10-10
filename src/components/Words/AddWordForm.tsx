import {
  Button,
  NativeSelect,
  PasswordInput,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useState } from 'react';

export default function AddWordForm() {
  const [spelling, setSpelling] = useState<string>('');
  const [definition, setDefinition] = useState<string>('');
  const [partOfSpeech, setPartOfSpeech] = useState<string>('');
  const [adminKey, setAdminKey] = useState<string>('');

  return (
    <Stack justify="center" spacing="lg">
      <TextInput
        placeholder="Enter word..."
        label="New Word"
        value={spelling}
        onChange={(event) => setSpelling(event.currentTarget.value)}
      />
      <Textarea
        placeholder="Enter definition..."
        label="Definition"
        value={definition}
        onChange={(event) => setDefinition(event.currentTarget.value)}
      />
      <NativeSelect
        data={['Noun', 'Verb', 'Adjective']}
        placeholder="Pick one"
        label="Part of Speech"
        value={partOfSpeech}
        onChange={(event) => setPartOfSpeech(event.currentTarget.value)}
      />
      <PasswordInput
        placeholder="Enter key..."
        label="Admin Key"
        value={adminKey}
        onChange={(event) => setAdminKey(event.currentTarget.value)}
      />
      <Button
        disabled={!spelling || !definition || !partOfSpeech || !adminKey}
        type="submit"
      >
        Submit
      </Button>
    </Stack>
  );
}
