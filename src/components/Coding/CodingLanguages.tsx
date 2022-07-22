import React from 'react';
import { Text, createStyles, Group, Progress } from '@mantine/core';
import { Surface } from '../common';

type CodingLanguage = {
  name: string;
  strength: number;
};

const languages: CodingLanguage[] = [
  {
    name: 'AppleScript',
    strength: 25,
  },
  {
    name: 'Bash',
    strength: 45,
  },
  {
    name: 'JavaScript',
    strength: 85,
  },
  {
    name: 'TypeScript',
    strength: 70,
  },
];

const useStyles = createStyles((theme) => ({
  languageItem: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
}));

function getColorByStrength(strength: number): string {
  if (strength >= 67) return 'green';
  if (strength >= 33) return 'yellow';
  return 'red';
}

export default function CodingLanguages() {
  const { classes } = useStyles();

  return (
    <Surface.Container>
      {languages
        .sort((a, b) => b.strength - a.strength)
        .map((language) => {
          const { name, strength } = language;
          return (
            <div key={name} className={classes.languageItem}>
              <Group position="apart">
                <Text weight={700} size="lg">
                  {name}
                </Text>
              </Group>
              <Progress
                radius="sm"
                size="md"
                striped
                mt="xs"
                value={strength}
                color={getColorByStrength(strength)}
              />
            </div>
          );
        })}
    </Surface.Container>
  );
}
