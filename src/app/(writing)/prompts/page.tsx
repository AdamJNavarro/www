import Link from 'next/link';
import { formatDate } from '~/utils/Dates';
import { sortByDate } from '~/utils';
import routes from '../../config/routes';
import { getMDXContent } from '~/utils/Content';

export const { metadata } = routes.prompts;

export default async function PromptsPage() {
  const prompts = getMDXContent('prompts');
  return (
    <div>
      <h1 className="page-h1 text-lgeft">Prompts</h1>

      <div className="space-y-6">
        {sortByDate(prompts, 'metadata.publishedAt').map((prompt) => (
          <Link
            key={prompt.slug}
            className="group flex flex-col"
            href={`/prompts/${prompt.slug}`}
          >
            <div className="w-full flex flex-col space-y-1">
              <div className="text-surface-primary text-md font-medium tracking-tight group-hover:text-violet-500 dark:group-hover:text-violet-400">
                {prompt.metadata.title}
              </div>
              <div className="flex space-x-3 text-sm text-surface-secondary">
                <div>
                  {formatDate({ date: prompt.metadata.publishedAt, format: 'long' })}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
