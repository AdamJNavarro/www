import CharityGame from '~/components/CharityGame';
import ListDetailView from '~/components/Layouts/ListDetailView';

export default function CharityGamePage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<CharityGame />} />
    </>
  );
}
