import { getLatestWord } from './db/queries';
import Home from './home';

export default async function Page() {
  const latestWord = await getLatestWord();
  return <Home data={{ latestWord }} />;
}
