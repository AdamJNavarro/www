type ProjectListProps = { label: string; projects: any[] }

const ProjectList = ({ label, projects }: ProjectListProps) => {
  return (
    <div className="space-y-8">
      <h4 className="font-sans text-xl font-bold md:text-2xl text-secondary">
        {label}
      </h4>
      <div className="prose space-y-6">
        {projects.map((project) => {
          const { name, url, description } = project
          return (
            <div key={name} className="space-y-1">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium highlight-link-hover"
              >
                {name}
              </a>
              <p className="text-tertiary">{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectList
