import routes from '../../config/routes';
import Link from 'next/link';
import { formatDate } from '~/utils/Dates';
import { sortByDate } from '~/utils';
import { getMDXContent } from '~/utils/Content';

export const { metadata } = routes.blog;

export default async function BlogPage() {
  const allBlogs = getMDXContent('blog');

  return (
    <div>
      <h1 className="page-h1 text-lgeft">My Blog</h1>
      <div className="space-y-6">
        {sortByDate(allBlogs, 'metadata.publishedAt').map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col space-y-1">
              <div className="text-surface-primary text-md font-medium tracking-tight group-hover:text-violet-500 dark:group-hover:text-violet-400">
                {post.metadata.title}
              </div>
              <div className="flex space-x-3 text-sm text-surface-secondary">
                <div>
                  {formatDate({ date: post.metadata.publishedAt, format: 'long' })}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
