import { CenteredColumn, Page } from "../components/layout"
import { activeProjects, deadProjects } from "../data/projects"

import { ProjectList } from "../components/projects"

export default function ProjectsPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="mt-12 space-y-12">
          <div className="space-y-1">
            <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">
              Projects
            </h1>
            <p className="font-sans text-lg leading-snug md:text-xl text-tertiary">
              Various things I've created or worked on.
            </p>
          </div>
          <div className="space-y-16 md:space-y-20">
            <ProjectList label="Active Projects" projects={activeProjects} />
            <ProjectList label="Dead Projects" projects={deadProjects} />
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
