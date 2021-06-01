import { CenteredColumn, Page, PageHeader } from "~/components/layout"

export default function DancingPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            title="Dancing"
            subtitle="If there's a dance floor, you'll be able to find me on it."
          />
          <div className="prose">
            <p>
              My favorite style of dance is definitely hip hop but I will happily
              jump into some salsa or bachata classes whenever time permits.
            </p>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
