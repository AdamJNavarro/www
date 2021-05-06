import { CenteredColumn, Page, PageHeader } from "../components/layout"

import books from "../data/books"

export default function BooksPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12">
          <PageHeader
            title="Books"
            subtitle="What I've read recently with my main takeaway from each book."
          />

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
