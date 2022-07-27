import { List } from '@mantine/core';
import { Section } from '../common';
import { LinkElement, linkStyles } from '../common/Links';
import { charities } from './CharityGame.data';

export default function CharitiesList() {
  const { classes } = linkStyles();
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Charities</Section.Title>
      </Section.Header>
      <Section.Content>
        <List spacing="xs" size="lg" center>
          {charities.map((item) => (
            <LinkElement
              key={item.label}
              href={item.href}
              isExternal
              className={classes.text}
            >
              <List.Item>{item.label}</List.Item>
            </LinkElement>
          ))}
        </List>
      </Section.Content>
    </Section.Container>
  );
}
