import { CenteredColumn, Page, PageHeader } from "~/components/layout"

const supplements = [
  {
    name: "PreJYM High-Performance Pre-Workout",
    url: "https://jymsupplementscience.com/product/pre-jym",
  },
  {
    name: "PostJYM Recovery Matrix",
    url: "https://jymsupplementscience.com/product/post-jym-active-matrix",
  },
  {
    name: "BSN TRUE-MASS Mass Gainer",
    url: "https://www.gobsn.com/en-us/product/truemass",
  },
]

export default function FitnessPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            subtitle="My favorite movements, supplements, etc."
            title="Fitness"
          />
          <SupplementList />
        </div>
      </CenteredColumn>
    </Page>
  )
}

const SupplementList = () => {
  return (
    <div className="space-y-6">
      <h4 className="capitalize font-sans text-lg font-bold md:text-xl text-gray-900 dark:text-gray-300">
        Favorite Supplements
      </h4>
      <ul className="space-y-4 ml-5 font-medium md:font-normal md:text-lg  list-disc">
        {supplements.map((supplement) => {
          return (
            <li
              className="text-purple-500 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-400"
              key={supplement.name}
            >
              <a href={supplement.url}>{supplement.name}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
