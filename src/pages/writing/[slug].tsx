import { CenteredColumn, Page } from "../../components/layout"

import posts from "../../data/posts"

function PostPage({ title, date, synopsis }: any) {
  return (
    <Page>
      <CenteredColumn>
        <div className="prose">
          <h1>{title}</h1>
          <p>{synopsis}</p>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticPaths() {
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: posts.find((post) => post.slug === slug),
  }
}

export default PostPage
