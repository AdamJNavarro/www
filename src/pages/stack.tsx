import { CenteredColumn, Page, PageHeader } from "~/components/layout"

import LanguageList from "~/components/languages/LanguageList"
import ProductList from "~/components/products/ProductList"

export default function StackPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12">
          <PageHeader
            title="My Stack"
            subtitle="A list of technologies I have experience using or am familiar with."
          />
          <LanguageList />

          <ProductList
            label="Front-End"
            products={["apollo", "expo", "react native", "next.js"]}
          />
          <ProductList label="Back End" products={["node.js", "postgresql"]} />
        </div>
      </CenteredColumn>
    </Page>
  )
}
