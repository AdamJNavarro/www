import Link from 'next/link';
import { Anchor, Group } from '@mantine/core';
import { Section } from '~/components/common';
import LiteralList from './LiteralList';

export default function WantToReadList() {
  return (
    <Section.Container>
      <Section.Header>
        <Group justify="space-between">
          <Section.Title>Want to Read</Section.Title>
          <Anchor
            component={Link}
            href="https://literal.club/adamjnavarro/wants-to-read"
            target="_blank"
          >
            View All
          </Anchor>
        </Group>
      </Section.Header>
      <Section.Content>
        <LiteralList readingStatus="WANTS_TO_READ" itemLimit={4} />
      </Section.Content>
    </Section.Container>
  );
}
