import routes from '~/app/config/routes';
import { Page, Section } from '~/components/common';
import CodingLanguages from './CodingLanguages';

export const { metadata } = routes.coding;

export default async function CodingPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Coding</Page.Title>
          <Page.Description>All things coding-related.</Page.Description>
        </Page.Header>
        <Section.Container>
          <Section.Header>
            <Section.Title>Languages</Section.Title>
          </Section.Header>
          <Section.Content>
            <CodingLanguages />
          </Section.Content>
        </Section.Container>
      </Page.Content>
    </Page.Container>
  );
}
