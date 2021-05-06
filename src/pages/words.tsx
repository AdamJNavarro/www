import { CenteredColumn, Page } from "../components/layout"

import words from "../data/words"

export default function WordsPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="mt-12 space-y-12">
          <div className="space-y-1">
            <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">
              Words
            </h1>
            <p className="font-sans text-lg leading-snug md:text-xl text-tertiary">
              An ever-growing list of words I've encountered and did not know.
            </p>
          </div>
          <h3 className="font-serif text-base">
            * The definitions below are for my own understanding. Links to
            Merriam-Webster provided.
          </h3>
          <div className="prose">
            {words.map((word) => {
              return (
                <p>
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
