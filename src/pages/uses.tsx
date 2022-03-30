import { CenteredColumn, Page, PageHeader } from '~/components/layout';
import PersonalStack from '~/components/stack/PersonalStack';

export default function UsesPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            subtitle="A collection of products I use on a regular basis."
            title="My Stack"
          />
          <PersonalStack />
        </div>
      </CenteredColumn>
    </Page>
  );
}
