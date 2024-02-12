import routes from '~/app/config/routes';
import Words from './Words';
import { getWords } from '~/app/db/queries';

export const { metadata } = routes.words;

export default async function Page() {
  const words = await getWords();
  return (
    <>
      <Words data={words} />
    </>
  );
}
