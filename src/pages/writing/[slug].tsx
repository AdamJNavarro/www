import { CenteredColumn, Page } from "~/components/layout"

import Link from "next/link"
import { MDXRemote } from "next-mdx-remote"
import getAllPosts from "~/helpers/getAllPosts"
import { serialize } from "next-mdx-remote/serialize"

function PostPage({ title, content }: any) {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-6">
          <Link href="/writing" passHref>
            <a className="hover:text-purple-600 text-purple-500 dark:text-purple-500 dark:hover:text-purple-400 font-semibold">
              &larr; Writing
            </a>
          </Link>
          <div className="space-y-1">
            <h1 className="font-sans text-2xl font-extrabold md:text-4xl dark:text-gray-50">
              {title}
            </h1>
          </div>
        </div>

        <div className="mt-10 prose lg:prose-lg">
          <MDXRemote {...content} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const allPosts = getAllPosts()
  const { data, content } = allPosts.find((item) => item.slug === params.slug)
  const mdxSource = await serialize(content)

  return {
    props: {
      ...data,
      content: mdxSource,
      date: data.date,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      fallback: false,
      params: {
        slug: post.slug,
      },
    })),
  }
}

export default PostPage
