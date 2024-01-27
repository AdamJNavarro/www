import { Center, SegmentedControl } from '@mantine/core';
import {
  IconClock,
  IconGridDots,
  IconList,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react';

export default function WordSortingToggle({ ...rest }: any) {
  return (
    <SegmentedControl
      color="violet.7"
      transitionDuration={200}
      transitionTimingFunction="linear"
      data={[
        {
          value: 'recent',
          label: (
            <Center>
              <IconClock size={20} />
            </Center>
          ),
        },
        {
          value: 'abc',
          label: (
            <Center>
              <IconSortAscendingLetters size={20} />
            </Center>
          ),
        },
        {
          value: 'reverse-abc',
          label: (
            <Center>
              <IconSortDescendingLetters size={20} />
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
              <IconGridDots size={20} />
            </Center>
          ),
        },
        {
          value: 'table',
          label: (
            <Center>
              <IconList size={20} />
            </Center>
          ),
        },
      ]}
      {...rest}
    />
  );
}
