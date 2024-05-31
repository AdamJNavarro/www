import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CustomMDX } from '~/components/common/Mdx';
import { Page } from '~/components/Layouts/Page';
import { getMDXContent } from '~/utils/Content';
import { formatDate } from '~/utils/Dates';

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = getMDXContent('blog').find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, summary: description } = post.metadata;

  return {
    title,
    description,
  };
}

export default function Blog({ params }) {
  const post = getMDXContent('blog').find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://adamjnavarro${post.metadata.image}`
              : `https://adamjnavarro/og?title=${post.metadata.title}`,
            url: `https://adamjnavarro/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Adam Navarro',
            },
          }),
        }}
      />
      <Page.Header>
        <Page.Title className="font-bold text-3xl">{post.metadata.title}</Page.Title>
        <Page.Description className="-mt-2">
          {formatDate({ date: post.metadata.publishedAt, format: 'long-ago' })}
        </Page.Description>
      </Page.Header>

      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
