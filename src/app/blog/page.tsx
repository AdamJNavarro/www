import { Page } from '~/components/Layouts/Page';
import routes from '../config/routes';
import { getBlogPosts } from '../data/blog';
import Link from 'next/link';

export const { metadata } = routes.blog;

export default async function BlogPage() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      <Page.Header>
        <Page.Title>My Blog</Page.Title>
        <Page.Description>A collection of my thoughts and musings.</Page.Description>
      </Page.Header>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
