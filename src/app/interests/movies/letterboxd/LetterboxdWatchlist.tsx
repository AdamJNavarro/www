import { Section } from '~/components/common';
import { watchlist } from './letterboxd.data';
import LetterboxdList from './LetterboxdList';

export default function LetterboxdWatchlist() {
  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Want to Watch</Section.Title>
      </Section.Header>
      <Section.Content>
        <LetterboxdList data={watchlist} />
      </Section.Content>
    </Section.Container>
  );
}
