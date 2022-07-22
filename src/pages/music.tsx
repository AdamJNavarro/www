import ListDetailView from '~/components/Layouts/ListDetailView';
import Music from '~/components/Music';

export default function MusicPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Music />} />
    </>
  );
}
