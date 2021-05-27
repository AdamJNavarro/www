import { CenteredColumn, Page } from "~/components/layout"
import { currentBook, pastBooks } from "~/data/books"

import BookList from "~/components/books/BookList"
import RecoBox from "~/components/books/RecoBox"

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

          <RecoBox />

          <div className="hidden flex items-center rounded justify-center flex-none px-4 py-2 space-x-3 font-medium text-white bg-blue-600" />
          <div className="hidden flex items-center rounded justify-center flex-none px-4 py-2 space-x-3 font-medium text-white bg-green-600" />
          <div className="hidden self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide text-green-600 bg-green-500 bg-opacity-10  dark:text-green-400 dark:border-green-400 dark:bg-opacity-30" />
          <div className="hidden elf-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide text-blue-600 bg-blue-500 bg-opacity-10 dark:text-blue-400 dark:border-blue-400 dark:bg-opacity-30" />
          <div className="hidden flex-col rounded-3xl" />
          <BookList label="📚 Past Books" books={pastBooks} />
        </div>
      </CenteredColumn>
    </Page>
  )
}
