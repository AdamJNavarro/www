import { CenteredColumn, Page } from "../components/layout"

import books from "../data/books"

export default function BooksPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="mt-12 space-y-12">
          <div className="space-y-1">
            <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">
              Books
            </h1>
            <p className="font-sans text-lg leading-snug md:text-xl text-tertiary">
              What I've read recently with my main takeaway from each book.
            </p>
          </div>

          <div className="prose">
            {books.map((book) => {
              return (
                <div className="space-y-1">
                  <p>
                    <a href={book.url} target="_blank" rel="noopener noreferrer">
                      {book.title}
                    </a>{" "}
                    by {book.author}
                  </p>
                  <p>{book.takeaway}</p>
                </div>
              )
            })}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
