import ListDetailView from '~/components/Layouts/ListDetailView';
import Words from '~/components/Words';

export default function WordsPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Words />} />
    </>
  );
}
