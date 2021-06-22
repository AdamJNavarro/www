import { CenteredColumn, Page, PageHeader } from "~/components/layout"

import Link from "next/link"
import getAllPosts from "~/helpers/getAllPosts"

export default function WritingPage({ posts }: any) {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            subtitle="A collection of my thoughts put to words."
            title="Writing"
          />
        </div>

        <div className="prose">
          {posts.map((post) => {
            return (
              <div className="space-y-1" key={post.slug}>
                <h3>
                  <Link href={`/writing/${post.slug}`} passHref>
                    <a>{post.title}</a>
                  </Link>
                </h3>
                <p>{post.synopsis}</p>
              </div>
            )
          })}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        content,
        date: data.date,
        slug,
      })),
    },
  }
}
