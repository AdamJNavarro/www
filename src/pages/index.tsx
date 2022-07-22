import Home from '~/components/Home';
import ListDetailView from '~/components/Layouts/ListDetailView';

export default function HomePage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Home />} />
    </>
  );
}
