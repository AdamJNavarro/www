import { CenteredColumn, Page, PageHeader } from "../components/layout"
import { activeProjects, deadProjects } from "../data/projects"

import { ProjectList } from "../components/projects"

export default function ProjectsPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12">
          <PageHeader
            title="Projects"
            subtitle="Various things I've created or worked on."
          />

          <div className="space-y-16 md:space-y-20">
            <ProjectList label="Active Projects" projects={activeProjects} />
            <ProjectList label="Dead Projects" projects={deadProjects} />
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
