import { Section } from '~/components/common';
import UsesList from './UsesList';
import { computerUsesItems } from './uses.data';

export default function ComputerUsesList() {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Computer</Section.Title>
      </Section.Header>
      <Section.Content>
        <UsesList items={computerUsesItems} />
      </Section.Content>
    </Section.Container>
  );
}
