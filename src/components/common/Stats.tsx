import { Text, Paper, Group, NumberFormatter, ThemeIcon } from '@mantine/core';

export interface Stat {
  label: string;
  value: number;
  icon: any;
}

export function StatCard({ label, value, icon: Icon }: Stat) {
  return (
    <Paper withBorder radius="md" p="xs" bg="dark.8">
      <Group>
        <ThemeIcon
          variant="gradient"
          radius="xl"
          size="xl"
          gradient={{ from: 'violet.7', to: 'violet.9' }}
        >
          <Icon style={{ width: '50%', height: '50%' }} />
        </ThemeIcon>

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
