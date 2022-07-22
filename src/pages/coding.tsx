import Coding from '~/components/Coding';
import ListDetailView from '~/components/Layouts/ListDetailView';

export default function CodingPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Coding />} />
    </>
  );
}
