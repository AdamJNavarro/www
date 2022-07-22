import ListDetailView from '~/components/Layouts/ListDetailView';
import Dancing from '~/components/Dancing';

export default function DancingPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Dancing />} />
    </>
  );
}
