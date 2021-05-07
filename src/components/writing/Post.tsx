import { CenteredColumn } from "../layout"

const Post = ({ post }: any) => {
  return (
    <CenteredColumn>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="font-sans text-2xl font-extrabold md:text-4xl text-primary">
            {post.title}
          </h1>
          <span className="inline-block leading-snug text-tertiary">5/8/21</span>
        </div>
      </div>
      <div className="mt-8 prose">{post.html}</div>
    </CenteredColumn>
  )
}

export default Post
