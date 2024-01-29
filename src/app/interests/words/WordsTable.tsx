import { ScrollArea, Table, Text } from '@mantine/core';
import { DataTable } from '../../../components/common/Table';
import { getPartOfSpeechColor } from './Words.utils';
import { WordProps } from './Words.types';

function TableEntry({ spelling, definition, partOfSpeech, dateLearned }: WordProps) {
  return (
    <tr key={spelling}>
      <td>
        <Text size="sm" fw={600} tt="capitalize">
          {spelling}
        </Text>
      </td>
      <td>2022</td>
      <td>
        <Text size="sm" c={getPartOfSpeechColor(partOfSpeech)} tt="capitalize">
          {partOfSpeech}
        </Text>
      </td>
      <td>
        <Text size="sm" fw={500}>
          {definition}.
        </Text>
      </td>
    </tr>
  );
}

const headers = ['Term', 'Date', 'Part of Speech', 'Definition'];

const isTest = false;

export default function WordsTable({
  entries,
  error,
  loading,
}: {
  entries: WordProps[];
  error: any;
  loading: boolean;
}) {
  if (error) return <p>ERROR</p>;
  if (loading) return <p>loading</p>;

  if (isTest) {
    return (
      <DataTable error={error} loading={loading} headers={headers}>
        {entries.map((entry) => (
          <TableEntry {...entry} />
        ))}
      </DataTable>
    );
  }

  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="xs">
        <thead>
          <tr>
            <th>Term</th>
            <th>Date</th>
            <th>Part of Speech</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <TableEntry {...entry} />
          ))}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
