import BookItem from "./BookItem"

type BookListProps = { label: string; books: any[] }

const BookList = ({ label, books }: BookListProps) => {
  return (
    <div className="space-y-6">
      <h4 className="font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        {label}
      </h4>
      <div className="prose space-y-8">
        {books.map((book) => {
          return <BookItem {...book} />
        })}
      </div>
    </div>
  )
}

export default BookList
