import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CustomMDX } from '~/components/common/Mdx';
import { getMDXContent } from '~/utils/Content';
import { formatDate } from '~/utils/Dates';

export async function generateMetadata(props): Promise<Metadata | undefined> {
  const params = await props.params;
  const prompt = getMDXContent('prompts').find(
    (prompt) => prompt.slug === params.slug
  );
  if (!prompt) {
    return;
  }

  const { title, summary: description } = prompt.metadata;

  return {
    title,
    description,
  };
}

export default async function Prompt(props) {
  const params = await props.params;
  const prompt = getMDXContent('prompts').find(
    (prompt) => prompt.slug === params.slug
  );

  if (!prompt) {
    notFound();
  }

  return (
    <section>
      <article className="prose">
        <h1 className="font-bold text-xl tablet:text-xl">{prompt.metadata.title}</h1>
        <div className=" text-sm  mb-16 -mt-2 tablet:-mt-4">
          {formatDate({ date: prompt.metadata.publishedAt, format: 'long-ago' })}
        </div>
        <CustomMDX source={prompt.content} />
      </article>
    </section>
  );
}
