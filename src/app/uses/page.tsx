import { Page } from '~/components/common';
import routes from '../config/routes';
import ComputerUsesList from './ComputerUsesList';
import MiscUsesList from './MiscUsesList';

export const { metadata } = routes.uses;

export default async function UsesPage() {
  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>Uses</Page.Title>
          <Page.Description>A collection of products I use.</Page.Description>
        </Page.Header>
        <ComputerUsesList />
        <MiscUsesList />
      </Page.Content>
    </Page.Container>
  );
}
