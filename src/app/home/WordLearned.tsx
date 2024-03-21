import { buildMerriamWebsterUrl } from '~/app/words/Words.utils';
import Dashboard from './Dashboard';

export default function WordLearned({ data }: any) {
  return (
    <Dashboard.Card
      label="Word Learned"
      href={buildMerriamWebsterUrl(data.spelling)}
      logo="/img/logos/merriam-webster.svg"
    >
      <Dashboard.Title>{data.spelling}</Dashboard.Title>

      <Dashboard.Details>{data.definition}.</Dashboard.Details>
    </Dashboard.Card>
  );
}
