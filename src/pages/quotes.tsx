import ListDetailView from '~/components/Layouts/ListDetailView';
import Quotes from '~/components/Quotes';

export default function QuotesPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Quotes />} />
    </>
  );
}
