import { CenteredColumn, Page, PageHeader } from "../../components/layout"

import Link from "next/link"
import posts from "../../data/posts"

export default function WritingPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <PageHeader
            title="Writing"
            subtitle="A collection of my thoughts put on paper."
          />
        </div>
        <div className="prose">
          {posts.map((post) => {
            return (
              <div key={post.slug} className="space-y-1">
                <p>
                  <Link href={`/writing/${post.slug}`} passHref>
                    <a>{post.title}</a>
                  </Link>
                </p>
                <p>{post.synopsis}</p>
              </div>
            )
          })}
        </div>
      </CenteredColumn>
    </Page>
  )
}
