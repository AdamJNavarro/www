import { Center, SegmentedControl } from '@mantine/core';
import {
  Clock,
  GridDots,
  List,
  SortAscendingLetters,
  SortDescendingLetters,
} from 'tabler-icons-react';

export default function WordSortingToggle({ ...rest }: any) {
  return (
    <SegmentedControl
      data={[
        {
          value: 'recent',
          label: (
            <Center>
              <Clock size={20} />
            </Center>
          ),
        },
        {
          value: 'abc',
          label: (
            <Center>
              <SortAscendingLetters size={20} />
            </Center>
          ),
        },
        {
          value: 'reverse-abc',
          label: (
            <Center>
              <SortDescendingLetters size={20} />
            </Center>
          ),
        },
      ]}
      {...rest}
    />
  );
}

export function WordsDisplayToggle({ ...rest }: any) {
  return (
    <SegmentedControl
      data={[
        {
          value: 'grid',
          label: (
            <Center>
              <GridDots size={20} />
            </Center>
          ),
        },
        {
          value: 'table',
          label: (
            <Center>
              <List size={20} />
            </Center>
          ),
        },
      ]}
      {...rest}
    />
  );
}
