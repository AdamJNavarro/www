import { CenteredColumn, Page, PageHeader } from "../components/layout"

import words from "../data/words"

export default function WordsPage() {
  //const orderedWords = words.sort((a, b) => (a.word > b.word ? 1 : -1))

  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            title="Words"
            subtitle="An ever-growing list of words I've encountered and did not know."
          />

          <div className="prose">
            {words.map((word) => {
              return (
                <p key={word.word}>
                  <a
                    href={`https://www.merriam-webster.com/dictionary/${encodeURIComponent(
                      word.word
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize"
                  >
                    {word.word}
                  </a>{" "}
                  - {word.definition}.
                </p>
              )
            })}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
