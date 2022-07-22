import ListDetailView from '~/components/Layouts/ListDetailView';
import Television from '~/components/Television';

export default function TvPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Television />} />
    </>
  );
}
