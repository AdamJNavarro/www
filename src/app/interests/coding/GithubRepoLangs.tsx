import {
  Box,
  Group,
  Progress,
  ScrollAreaAutosize,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core';

import { useGithubRepoLangs } from '~/lib/github';
import { githubLanguageColors } from '~/lib/github/github.data';

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

function LanguageListItemPlaceholder() {
  return (
    <Group wrap="nowrap">
      <Skeleton h={8} w={8} circle />
      <Skeleton h={12} w="25%" />
    </Group>
  );
}

function ProgressContainer({ children }: any) {
  return (
    <Progress.Root size={16} radius="sm" mb="xl">
      {children}
    </Progress.Root>
  );
}

function LoadingPlaceholder() {
  return (
    <>
      <ProgressContainer>
        <Progress.Section value={100} animated color="dark.6" />
      </ProgressContainer>
      <Stack gap="md">
        <LanguageListItemPlaceholder />
        <LanguageListItemPlaceholder />
        <LanguageListItemPlaceholder />
        <LanguageListItemPlaceholder />
      </Stack>
    </>
  );
}

export default function GithubRepoLangs({ project }) {
  const { data, error } = useGithubRepoLangs({
    owner: project.github.owner,
    repo: project.github.repo,
  });

  if (!data) return <LoadingPlaceholder />;

  const progressData = generateProgressData(data);

  return (
    <>
      <ProgressContainer>
        {progressData.map((item) => (
          <Progress.Section
            key={`${item.language}-${item.percentage}`}
            value={item.percentage}
            color={item.color}
          />
        ))}
      </ProgressContainer>
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
    </>
  );
}
