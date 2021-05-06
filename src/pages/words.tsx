import { CenteredColumn, Page, PageHeader } from "../components/layout"

import words from "../data/words"

export default function WordsPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            title="Words"
            subtitle="An ever-growing list of words I've encountered and did not know."
          />

          <div className="space-y-5">
            {words.map((word) => {
              return (
                <p key={word.word} className="text-gray-900">
                  <a
                    href={`https://www.merriam-webster.com/dictionary/${encodeURIComponent(
                      word.word
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capitalize font-medium underline text-black"
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
