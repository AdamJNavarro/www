import { watched } from './letterboxd.data';
import LetterboxdList from './LetterboxdList';

export default function LetterboxdWatched() {
  return <LetterboxdList data={watched} />;
}
