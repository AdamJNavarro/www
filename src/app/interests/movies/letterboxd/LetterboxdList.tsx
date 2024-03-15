import Image from 'next/image';
import Link from 'next/link';

export default function LetterboxdList({ data }: any) {
  return (
    <div className="w-shell-full bg-slate-900/35 tablet:mx-0 tablet:bg-transparent">
      <div className="grid grid-cols-1 tablet:gap-4 tablet:grid-cols-2">
        {data.map((item) => (
          <Link
            href={item.url}
            key={item.name}
            className="flex items-center px-6 py-5 tablet:px-4 tablet:bg-surface tablet:border-surface hover-surface tablet:rounded-md"
          >
            <div className="flex-initial flex-shrink-0 justify-center mr-6">
              <Image
                src={`https://image.tmdb.org/t/p/original${item.posterPath}`}
                width={640}
                height={960}
                alt={`${item.name} movie poster`}
                className="w-16 h-24"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-surface-primary leading-tight mb-2 text-base">
                {item.name}
              </div>
              <div className="text-surface-tertiary text-sm">{item.year}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
