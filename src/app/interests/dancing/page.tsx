import routes from '~/app/config/routes';
import { Page, Section } from '~/components/common';
import DancingPerformances from './DancingPerformances';

export const { metadata } = routes.dancing;

export default async function DancingPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Dancing</Page.Title>
          <Page.Description>
            If there is a dance floor, you will find me on it.
          </Page.Description>
        </Page.Header>
        <Section.Container>
          <Section.Header>
            <Section.Title>Performances</Section.Title>
            <Section.Description>
              Some of my favorite choreography that I have been a part of.
            </Section.Description>
          </Section.Header>
          <Section.Content>
            <DancingPerformances />
          </Section.Content>
        </Section.Container>
      </Page.Content>
    </Page.Container>
  );
}
