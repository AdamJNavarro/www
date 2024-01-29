import { Section } from '~/components/common';
import TraktStats from './TraktStats';
import TraktList from './TraktList';

export default function TraktContent() {
  return (
    <>
      <Section.Container>
        <Section.Header>
          <Section.Title>Lifetime Stats</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktStats />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Currently Watching</Section.Title>
          <Section.Description>
            I try and only watch two series at a time. Typically one live-action and
            the other anime.
          </Section.Description>
        </Section.Header>
        <Section.Content>
          <TraktList placeholderCount={4} listId="currently-watching" />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>Recently Watched</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList placeholderCount={3} listId="watched" itemLimit={3} />
        </Section.Content>
      </Section.Container>
      <Section.Container>
        <Section.Header>
          <Section.Title>My Favorites</Section.Title>
        </Section.Header>
        <Section.Content>
          <TraktList placeholderCount={5} listId="favorites" />
        </Section.Content>
      </Section.Container>
    </>
  );
}
