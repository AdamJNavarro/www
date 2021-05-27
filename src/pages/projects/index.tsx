import { CenteredColumn, Page, PageHeader } from "~/components/layout"

import { ProjectList } from "~/components/projects"
import getAllProjects from "~/helpers/getAllProjects"

export default function ProjectsPage({ projects }: any) {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12">
          <PageHeader
            title="Projects"
            subtitle="Various things I've created or worked on."
          />

          <div className="space-y-12 md:space-y-16">
            <ProjectList
              label="🛠 Active Projects"
              projects={projects.filter((project: any) => !project.dead)}
            />
            <ProjectList
              label="☠ Dead Projects"
              projects={projects.filter((project: any) => !!project.dead)}
            />
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps() {
  const allProjects = getAllProjects()
  return {
    props: {
      projects: allProjects.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  }
}
