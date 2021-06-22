import { CenteredColumn, Page, PageHeader } from "~/components/layout"

import words from "~/data/words"

export default function WordsPage() {
  const alphabetizedWords = words.sort((a, b) => (a.term > b.term ? 1 : -1))
  //const orderedWords = words.sort((a, b) => (a.year > b.year ? 1 : -1))
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            subtitle="An ever-growing list, beginning from mid-2018, of words I've encountered and did not know."
            title="Words"
          />
          <div className="prose">
            {alphabetizedWords.map((word: any) => {
              const { term, definition } = word
              return (
                <p key={term}>
                  <a
                    className="capitalize"
                    href={`https://www.merriam-webster.com/dictionary/${encodeURIComponent(
                      term
                    )}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {term}
                  </a>{" "}
                  - {definition}.
                </p>
              )
            })}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
