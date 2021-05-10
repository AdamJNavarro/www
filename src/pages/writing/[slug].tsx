import { CenteredColumn, Page } from "../../components/layout"

import Link from "next/link"
import { MDXRemote } from "next-mdx-remote"
import getAllPosts from "../../helpers/getAllPosts"
import { serialize } from "next-mdx-remote/serialize"

function PostPage({ title, date, content }: any) {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-8">
          <Link href="/writing" passHref>
            <a className="hover:text-gray-1000">&larr; Writing</a>
          </Link>
          <div className="space-y-2">
            <h1 className="font-sans text-2xl font-extrabold md:text-4xl text-primary">
              {title}
            </h1>
            <span className="inline-block leading-snug text-tertiary">{date}</span>
          </div>
        </div>

        <div className="mt-12 prose">
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
      date: data.date,
      content: mdxSource,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export default PostPage
