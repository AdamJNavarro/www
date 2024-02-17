import Link from 'next/link';
import { Anchor, Group } from '@mantine/core';
import { Section } from '~/components/common';
import LiteralList from './LiteralList';

export default function PastReadingList() {
  return (
    <Section.Container>
      <Section.Header>
        <Group justify="space-between">
          <Section.Title>Recently Finished</Section.Title>
          <Anchor
            component={Link}
            href="https://literal.club/adamjnavarro/has-read"
            target="_blank"
          >
            View All
          </Anchor>
        </Group>
      </Section.Header>
      <Section.Content>
        <LiteralList readingStatus="FINISHED" itemLimit={8} />
      </Section.Content>
    </Section.Container>
  );
}
