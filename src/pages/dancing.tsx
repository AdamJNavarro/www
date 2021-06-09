import { CenteredColumn, Page, PageHeader } from "~/components/layout"

export default function DancingPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            title="Dancing"
            subtitle="If there's a dance floor, you'll find me on it."
          />

          <div className="space-y-8">
            <h3 className="font-sans text-lg font-black md:text-2xl text-black dark:text-gray-200">
              Performances
            </h3>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
