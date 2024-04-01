import Image from 'next/image';

type DataSources = 'trakt' | 'letterboxd' | 'spotify';

type DataAttributionProps = {
  label?: string;
  sources: DataSources[];
};

export function DataAttribution({
  label = 'Data provided by',
  sources,
}: DataAttributionProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col text-center mx-auto py-3">
        <div className="text-sm font-medium text-surface-secondary mb-3">
          {label}
        </div>
        <div className="flex space-x-3">
          {sources.includes('letterboxd') && (
            <a
              href="https://letterboxd.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/logos/letterboxd-attr-dark.svg"
                width={500}
                height={110}
                alt={`letterboxd brand icon`}
                className="h-6 w-24"
              />
            </a>
          )}
          {sources.includes('trakt') && (
            <a href="https://trakt.tv/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/img/logos/trakt-attr-dark.svg"
                width={288}
                height={98}
                alt={`trakt brand icon`}
                className="h-6 w-24"
              />
            </a>
          )}
          {sources.includes('spotify') && (
            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/img/logos/spotify-attr.png"
                width={2362}
                height={709}
                alt={`spotify brand icon`}
                className="h-6 w-24"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
