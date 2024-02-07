import { Section } from '~/components/common';
import { watched } from './letterboxd.data';
import LetterboxdList from './LetterboxdList';

export default function LetterboxdWatched() {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Recently Watched</Section.Title>
      </Section.Header>
      <Section.Content>
        <LetterboxdList data={watched} />
      </Section.Content>
    </Section.Container>
  );
}
