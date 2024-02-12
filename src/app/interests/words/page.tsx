import routes from '~/app/config/routes';
import Words from './Words';
import { getWords } from '~/app/db/queries';

export const { metadata } = routes.words;

export default async function Page() {
  return (
    <>
      <Words />
      <WordBank />
    </>
  );
}

async function WordBank() {
  const words = await getWords();
  console.log('WORDS::', words);
  return <div />;
}
