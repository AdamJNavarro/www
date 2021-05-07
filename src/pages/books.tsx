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
              const { title, author, takeaway, url } = book
              return (
                <div key={title} className="space-y-1">
                  <p>
                    <a href={url} target="_blank" rel="noopener noreferrer">
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
