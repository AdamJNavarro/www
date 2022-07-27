import { RingProgress, Text, Paper, Center, Group } from '@mantine/core';

export interface Stat {
  label: string;
  value: number;
  icon: any;
}

export function StatCard({ label, value, icon: Icon }: Stat) {
  return (
    <Paper withBorder radius="md" p="xs">
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={6}
          sections={[{ value: 100, color: 'purple' }]}
          label={
            <Center>
              <Icon size={22} />
            </Center>
          }
        />

        <div>
          <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
            {label}
          </Text>
          <Text weight={700} size="xl">
            {value}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}
