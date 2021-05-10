import { CenteredColumn, Page, PageHeader } from "../../components/layout"
import { format, parseISO } from "date-fns"

import Link from "next/link"
import getAllPosts from "../../helpers/getAllPosts"

export default function WritingPage({ posts }: any) {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            title="Writing"
            subtitle="A collection of my thoughts put to words."
          />
        </div>
        <div className="prose mt-10">
          <h5> *** Will be adding content here hopefully in the near future. ***</h5>
        </div>
        {/*
        <div className="prose">
          {posts.map((post) => {
            return (
              <div key={post.slug} className="space-y-1">
                <p>
                  <Link href={`/writing/${post.slug}`} passHref>
                    <a>{post.title}</a>
                  </Link>
                </p>
                <p>{format(parseISO(post.date), "MMMM do, uuu")}</p>
                <p>{post.synopsis}</p>
              </div>
            )
          })}
        </div> 
        */}
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
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  }
}
