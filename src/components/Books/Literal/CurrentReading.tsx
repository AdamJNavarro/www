import { Section } from '~/components/common';
import { LiteralReadingState } from './Literal.types';
import LiteralItem from './LiteralItem';
import LiteralList from './LiteralList';

export default function CurrentReading({
  entries,
}: {
  entries: LiteralReadingState[];
}) {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Currently Reading</Section.Title>
        <Section.Description>
          I try and only read two books at a time. Typically one fiction and the
          other non-fiction.
        </Section.Description>
      </Section.Header>
      <Section.Content>
        <LiteralList>
          {entries.map((entry) => (
            <LiteralItem {...entry} />
          ))}
        </LiteralList>
      </Section.Content>
    </Section.Container>
  );
}
