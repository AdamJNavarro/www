import { Page } from '~/components/Layouts/Page';
import routes from '../config/routes';
import { getBlogPosts } from '../data/blog';
import Link from 'next/link';
import { formatDate } from '~/utils/Dates';
import { pluralize, sortByDate } from '~/utils';

export const { metadata } = routes.blog;

export default async function BlogPage() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      <Page.Header>
        <Page.Title>My Blog</Page.Title>
        <Page.Description>A collection of my thoughts and musings.</Page.Description>
      </Page.Header>
      <div className="space-y-6">
        {sortByDate(allBlogs, 'metadata.publishedAt').map((post) => (
          <Link
            key={post.slug}
            className="group flex flex-col"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col space-y-1">
              <div className="text-surface-primary font-medium tracking-tight group-hover:text-violet-500 dark:group-hover:text-violet-400">
                {post.metadata.title}
              </div>
              <div className="flex space-x-3 text-sm text-surface-secondary">
                <div>
                  {formatDate({ date: post.metadata.publishedAt, format: 'long' })}
                </div>
                <div>~{pluralize({ count: post.readingTime, single: 'min' })}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
