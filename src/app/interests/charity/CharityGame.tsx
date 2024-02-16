'use client';

import { List, SimpleGrid } from '@mantine/core';
import { Section } from '~/components/common';
import { charities, charityGameStats } from './CharityGame.data';
import { StatCard } from '~/components/common/Stats';
import { sortByAbc } from '~/utils';

export default function CharityGame() {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 3 }} mb={100}>
        {charityGameStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </SimpleGrid>
      <Section.Container>
        <Section.Header>
          <Section.Title>What is it?</Section.Title>
        </Section.Header>
        <Section.Content>
          <p>
            I will select a piece of music from a visual medium (typically movies, tv
            or video games) and perform a section of it on either guitar or piano.
            The video is posted as an Instagram story and the first person to
            identify where the music is from gets to select a charity that I will
            donate to. The amount donated is usually $10 but can sometimes be higher
            -- such as when others want to match the donation. The name of the piece
            of music is not required, just where it is from.
          </p>
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Charities</Section.Title>
        </Section.Header>
        <Section.Content>
          <List spacing="lg" size="lg" center>
            {sortByAbc({ data: charities, key: 'label' }).map((item) => (
              <List.Item key={item.label}>{item.label}</List.Item>
            ))}
          </List>
        </Section.Content>
      </Section.Container>
    </>
  );
}
