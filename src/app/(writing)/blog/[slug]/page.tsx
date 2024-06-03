import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CustomMDX } from '~/components/common/Mdx';
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
    <section className="tablet:max-w-[900px] tablet:mx-auto">
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

      <article className="prose">
        <h1 className="font-bold text-xl tablet:text-xl">{post.metadata.title}</h1>
        <div className=" text-sm  mb-16 -mt-2 tablet:-mt-4">
          {formatDate({ date: post.metadata.publishedAt, format: 'long-ago' })}
        </div>
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
