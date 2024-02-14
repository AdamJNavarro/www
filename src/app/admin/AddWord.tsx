'use client';

import { Button, NativeSelect, Stack, Textarea, TextInput } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { addWord } from '../data/db/actions';

export default function AddWord() {
  const form = useForm({
    initialValues: {
      spelling: '',
      definition: '',
      partOfSpeech: 'Noun',
      dateLearned: new Date(),
      adminKey: '',
    },

    // functions will be used to validate values at corresponding key
    validate: {
      spelling: (value) =>
        value.length < 2 ? 'Spelling must have at least 2 letters' : null,
      definition: (value) =>
        value.length < 5 ? 'Definition must have at least 5 letters' : null,
      partOfSpeech: (value) => (value.length < 1 ? 'Select part of speech' : null),
      adminKey: (value) => (value.length < 1 ? 'Enter Admin Key' : null),
    },
    transformValues: (values) => ({
      ...values,
      spelling: values.spelling.toLowerCase().trim(),
      definition: values.definition.trim(),
      partOfSpeech: values.partOfSpeech.toLowerCase(),
    }),
  });

  const handleError = (errors: typeof form.errors) => {
    //console.log('ERRORS', errors);
  };

  const handleSumbit = async (values: typeof form.values) => {
    //console.log('HS VALUES', values);
    await addWord(values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSumbit, handleError)}>
      <Stack justify="center" gap="lg">
        <TextInput
          placeholder="Enter word..."
          label="New Word"
          {...form.getInputProps('spelling')}
        />
        <Textarea
          placeholder="Enter definition..."
          label="Definition"
          {...form.getInputProps('definition')}
        />
        <NativeSelect
          data={['Noun', 'Verb', 'Adjective', 'Adverb']}
          label="Part of Speech"
          {...form.getInputProps('partOfSpeech')}
        />
        <DateTimePicker
          valueFormat="DD MMM YYYY hh:mm A"
          label="Pick date and time"
          placeholder="Pick date and time"
          {...form.getInputProps('dateLearned')}
        />
        <TextInput
          placeholder="Enter key..."
          label="Admin Key"
          {...form.getInputProps('adminKey')}
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
