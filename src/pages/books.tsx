import { CenteredColumn, Page } from "../components/layout"

import RecoBox from "../components/books/RecoBox"
import books from "../data/books"

export default function BooksPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12">
          <div className="space-y-1">
            <h1 className="font-sans text-2xl font-black md:text-4xl text-black dark:text-gray-100">
              Books
            </h1>
            <p className="prose font-sans text-lg md:text-xl text-gray-800 dark:text-gray-200">
              What I've read recently with my main takeaway from each book. Currently
              reading{" "}
              <a
                href="https://www.goodreads.com/book/show/59716.To_the_Lighthouse"
                target="_blank"
                rel="noopener noreferrer"
                className="italic"
              >
                To The Lighthouse
              </a>{" "}
              by Virginia Woolf.
            </p>
          </div>

          <RecoBox />

          <div className="prose">
            {books.map((book) => {
              const { title, author, takeaway, url } = book
              return (
                <div key={title} className="space-y-1">
                  <p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="italic"
                    >
                      {title}
                    </a>{" "}
                    by {author}
                  </p>
                  <p>{takeaway}</p>
                </div>
              )
            })}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
