'use client';

import {
  Box,
  Flex,
  Group,
  Progress,
  ScrollAreaAutosize,
  Stack,
  Text,
} from '@mantine/core';

import { githubLanguageColors } from '~/app/data/github/github.data';

interface GithubLanguagesProgressItem {
  language: string;
  bytes: number;
  percentage: number;
  color: string;
}

function generateProgressData(data: any): GithubLanguagesProgressItem[] {
  const arr = data.items.map((lang) => ({
    ...lang,
    percentage: ((lang.bytes / data.totalBytes) * 100).toFixed(1),
    color: githubLanguageColors[lang.language].color,
  }));
  return arr;
}

export default function GithubRepoLanguages({ data }) {
  const progressData = generateProgressData(data);

  return (
    <Flex direction="column" w={{ base: '100%', xs: '50%' }}>
      <Progress.Root size={16} radius="sm" mb="xl">
        {progressData.map((item) => (
          <Progress.Section
            key={`${item.language}-${item.percentage}`}
            value={item.percentage}
            color={item.color}
          />
        ))}
      </Progress.Root>
      <ScrollAreaAutosize mah={250}>
        <Stack gap="xs">
          {progressData.map((item) => (
            <Group key={item.language} justify="space-between">
              <Group>
                <Box bg={item.color} h={8} w={8} style={{ borderRadius: '50%' }} />
                <Text>{item.language}</Text>
              </Group>
              <Text size="sm">{item.percentage}%</Text>
            </Group>
          ))}
        </Stack>
      </ScrollAreaAutosize>
    </Flex>
  );
}
