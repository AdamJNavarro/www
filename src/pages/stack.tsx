import ListDetailView from '~/components/Layouts/ListDetailView';
import Stack from '~/components/Stack';

export default function StackPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Stack />} />
    </>
  );
}
