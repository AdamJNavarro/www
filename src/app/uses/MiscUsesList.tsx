import { Section } from '~/components/common';
import UsesList from './UsesList';
import { miscUsesItems } from './uses.data';

export default function MiscUsesList() {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Lifestyle & Misc.</Section.Title>
      </Section.Header>
      <Section.Content>
        <UsesList items={miscUsesItems} />
      </Section.Content>
    </Section.Container>
  );
}
