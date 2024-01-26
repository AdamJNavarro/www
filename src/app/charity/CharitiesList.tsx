import { List } from '@mantine/core';
import { sortByAbc } from '~/utils';
import { Section } from '../../components/common';
import { charities } from './CharityGame.data';

export default function CharitiesList() {
  return (
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
  );
}
