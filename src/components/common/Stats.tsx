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
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {label}
          </Text>
          <Text fw={700} size="xl">
            {value}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}
