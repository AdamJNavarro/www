import { Center, SegmentedControl } from '@mantine/core';
import {
  IconClock,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from '@tabler/icons-react';

export default function WordSortingToggle({ ...rest }: any) {
  return (
    <SegmentedControl
      color="violet.7"
      bg="dark.8"
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
