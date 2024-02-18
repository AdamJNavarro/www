'use client';

import { Box, Group, Progress, SimpleGrid, Text } from '@mantine/core';
import { traktData } from '~/app/data/trakt';
import { Section } from '~/components/common';

const data = traktData.genres;

const breakpoint = 30;
const fixedValue = 4;
const totalGenres = data.length;
const genresAboveBreakpoint = data.filter((obj) => obj.total > breakpoint);
const genresAboveSum = genresAboveBreakpoint.reduce((n, { total }) => n + total, 0);
const genresBelowBreakpoint = totalGenres - genresAboveBreakpoint.length;
const remainingValue = 100 - genresBelowBreakpoint * fixedValue;

function getProgressValue(total: number): number {
  return total < breakpoint ? fixedValue : (total / genresAboveSum) * remainingValue;
}

export default function TraktGenres() {
  const chartData = data.map((obj, i) => ({
    name: obj.genre,
    total: obj.total,
    color: getColor(i),
  }));

  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Genres</Section.Title>
      </Section.Header>
      <Section.Content>
        <Progress.Root size={16} radius="sm" mb="xl">
          {chartData.map((item) => (
            <Progress.Section
              key={`${item.name}`}
              value={getProgressValue(item.total)}
              color={item.color}
            />
          ))}
        </Progress.Root>
        <SimpleGrid
          cols={{ base: 1, xs: 2, sm: 3, md: 4 }}
          spacing={{ base: 20, xs: '33%', sm: '15%', md: '10%' }}
          verticalSpacing={{ base: 15 }}
        >
          {chartData.map((obj) => (
            <Group key={obj.name} justify="space-between" wrap="nowrap">
              <Group wrap="nowrap">
                <Box bg={obj.color} h={10} w={10} style={{ borderRadius: '50%' }} />
                <Text tt="capitalize" lineClamp={1}>
                  {obj.name}
                </Text>
              </Group>
              <Text size="sm">{obj.total}</Text>
            </Group>
          ))}
        </SimpleGrid>
      </Section.Content>
    </Section.Container>
  );
}

const colors = [
  'red',
  'blue',
  'teal',
  'pink',
  'lime',
  'grape',
  'orange',
  'violet',
  'yellow',
  'cyan',
  'green',
  'indigo',
];

function getColor(index): string {
  const colorShadeIndex = index & 1 ? '6' : '9';
  const maxIndex = colors.length - 1;
  if (index > colors.length - 1) {
    const adjustedIndex = index - maxIndex - 1;
    return `${colors[adjustedIndex]}.${colorShadeIndex}`;
  }
  return `${colors[index]}.${colorShadeIndex}`;
}
