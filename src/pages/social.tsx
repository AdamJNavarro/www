import ListDetailView from '~/components/Layouts/ListDetailView';
import Social from '~/components/Social';

export default function SocialPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Social />} />
    </>
  );
}
