import { Page } from '~/components/common';
import AddWordForm from './AddWordForm';

export default async function AddWordPage() {
  return (
    <Page.Container>
      <Page.Content>
        <AddWordForm />
      </Page.Content>
    </Page.Container>
  );
}
