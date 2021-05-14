type ProjectListProps = { label: string; projects: any[] }

const ProjectList = ({ label, projects }: ProjectListProps) => {
  return (
    <div className="space-y-6">
      <h4 className="font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        {label}
      </h4>
      <div className="prose space-y-8">
        {projects.map((project) => {
          const { name, url, description } = project
          return (
            <div key={name} className="space-y-1">
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
              <p>{description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectList
