import About from '~/components/About';
import ListDetailView from '~/components/Layouts/ListDetailView';

export default function AboutPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<About />} />
    </>
  );
}
