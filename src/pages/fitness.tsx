import Fitness from '~/components/Fitness';
import ListDetailView from '~/components/Layouts/ListDetailView';

export default function FitnessPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Fitness />} />
    </>
  );
}
