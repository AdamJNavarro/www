import {
  RingProgress,
  Text,
  Paper,
  Center,
  Group,
  NumberFormatter,
} from '@mantine/core';

export interface Stat {
  label: string;
  value: number;
  icon: any;
}

export function StatCard({ label, value, icon: Icon }: Stat) {
  return (
    <Paper withBorder radius="md" p="xs" bg="dark.8">
      <Group>
        <RingProgress
          size={80}
          roundCaps
          thickness={6}
          sections={[{ value: 100, color: 'violet.7' }]}
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
            <NumberFormatter value={value} thousandSeparator />
          </Text>
        </div>
      </Group>
    </Paper>
  );
}
