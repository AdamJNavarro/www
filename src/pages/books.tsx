import Books from '~/components/Books';
import ListDetailView from '~/components/Layouts/ListDetailView';

export default function BooksPage() {
  return (
    <>
      <ListDetailView list={null} hasDetail detail={<Books />} />
    </>
  );
}
