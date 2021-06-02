import { CenteredColumn, Page } from "~/components/layout"
import { currentBook, pastBooks } from "~/data/books"

import BookList from "~/components/books/BookList"

export default function BooksPage() {
  const { title, author, url } = currentBook
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12">
          <div className="space-y-1">
            <h1 className="font-sans text-2xl font-black md:text-4xl text-black dark:text-gray-100">
              Books
            </h1>
            <p className="prose font-sans text-lg md:text-xl text-gray-800 dark:text-gray-200">
              What I've read recently with my main takeaway and thoughts from each
              book. Currently reading{" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="italic"
              >
                {title}
              </a>{" "}
              by {author}.
            </p>
          </div>

          <BookList label="📚 Past Books" books={pastBooks} />
        </div>
      </CenteredColumn>
    </Page>
  )
}
