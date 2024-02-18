import { Section } from '~/components/common';
import LiteralList from './LiteralList';

export default function CurrentReadingList() {
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
        <LiteralList readingStatus="IS_READING" itemLimit={2} />
      </Section.Content>
    </Section.Container>
  );
}
