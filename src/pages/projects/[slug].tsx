import { MDXRemote } from "next-mdx-remote"
import ProjectProfile from "~/components/projects/ProjectProfile"
import getAllProjects from "~/helpers/getAllProjects"
import { serialize } from "next-mdx-remote/serialize"

function ProjectPage({ project, content }: any) {
  return (
    <ProjectProfile {...project}>
      <MDXRemote {...content} />
    </ProjectProfile>
  )
}

export async function getStaticProps(context) {
  const { params } = context
  const allProjects = getAllProjects()
  const { data, content } = allProjects.find((item) => item.slug === params.slug)
  const mdxSource = await serialize(content)
  return {
    props: {
      project: data,
      content: mdxSource,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: getAllProjects().map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  }
}

export default ProjectPage
