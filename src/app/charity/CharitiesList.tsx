import { List } from '@mantine/core';
import { sortByAbc } from '~/utils';
import { Section } from '../../components/common';
import { LinkElement, linkStyles } from '../../components/common/Links';
import { charities } from './CharityGame.data';

export default function CharitiesList() {
  const { classes } = linkStyles();
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Charities</Section.Title>
      </Section.Header>
      <Section.Content>
        <List spacing="lg" size="lg" center>
          {sortByAbc({ data: charities, key: 'label' }).map((item) => (
            <List.Item key={item.label}>
              <LinkElement href={item.href} isExternal className={classes.text}>
                {item.label}
              </LinkElement>
            </List.Item>
          ))}
        </List>
      </Section.Content>
    </Section.Container>
  );
}
