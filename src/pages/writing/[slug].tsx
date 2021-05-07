import { CenteredColumn, Page } from "../../components/layout"

function PostPage({}: any) {
  return (
    <Page>
      <CenteredColumn>
        <div className="prose"></div>
      </CenteredColumn>
    </Page>
  )
}

/*export async function getStaticPaths() {
  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params: { slug } }) {
  return {
    props: posts.find((post) => post.slug === slug),
  }
} */

export default PostPage
