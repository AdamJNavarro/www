import routes from '~/app/config/routes';

export const { metadata } = routes.books;

export default async function BooksPage() {
  return (
    <section>
      <div className="mb-16">
        <h1 className="font-bold text-lg text-black dark:text-white desktop:text-2xl">
          Reading
        </h1>
        <p className="text-md text-zinc-800 dark:text-slate-300 prose dark:prose-invert">
          A peek into my reading likes and consumption.
        </p>
      </div>
    </section>
  );
}
