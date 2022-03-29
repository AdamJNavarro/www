import { CenteredColumn, Page, PageHeader } from '~/components/layout';

import LanguageStack from '~/components/stack/LanguageStack';

export default function StackPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            subtitle="A list of technologies I have experience using or am familiar with."
            title="My Stack"
          />
          <LanguageStack />
        </div>
      </CenteredColumn>
    </Page>
  );
}
