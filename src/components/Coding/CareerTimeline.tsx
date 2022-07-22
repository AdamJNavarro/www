import { Timeline, Text } from '@mantine/core';
import { Surface } from '../common';

export default function CareerTimeline() {
  return (
    <Surface.Container>
      <Timeline active={1} bulletSize={30} lineWidth={2}>
        <Timeline.Item title="Expo">
          <Text size="sm" mt={4}>
            Feb. 2018
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Next Opportunity">
          <Text size="sm" mt={4}>
            Present Day
          </Text>
        </Timeline.Item>
      </Timeline>
    </Surface.Container>
  );
}
