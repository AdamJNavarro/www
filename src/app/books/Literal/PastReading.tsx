import { Badge } from '@mantine/core';
import { Section } from '~/components/common';
import { LiteralReadingState, LiteralStatus } from '~/lib/literal/literal.types';
import LiteralItem from './LiteralItem';
import LiteralList from './LiteralList';

function getBadgeColor(status: LiteralStatus): string {
  if (status === 'FINISHED') return 'green';
  if (status === 'DROPPED') return 'red';
  return 'white';
}

function PastBook({ entry }: { entry: LiteralReadingState }) {
  return (
    <LiteralItem {...entry}>
      <div>
        <Badge color={getBadgeColor(entry.status)} size="md" variant="dot">
          {entry.status}
        </Badge>
      </div>
    </LiteralItem>
  );
}

export default function PastReading({
  entries,
}: {
  entries: LiteralReadingState[];
}) {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Past Reading</Section.Title>
      </Section.Header>
      <Section.Content>
        <LiteralList>
          {entries.map((entry) => (
            <PastBook key={entry.id} entry={entry} />
          ))}
        </LiteralList>
      </Section.Content>
    </Section.Container>
  );
}
