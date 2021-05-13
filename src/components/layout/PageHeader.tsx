//type PageHeaderProps = {title: string; subtitle?: string}

const PageHeader = ({ title, subtitle }: any) => {
  return (
    <div className="space-y-1">
      <h1 className="font-sans text-2xl font-black md:text-4xl text-black dark:text-gray-100">
        {title}
      </h1>
      <p className="font-sans text-lg md:text-xl text-gray-800 dark:text-gray-200">
        {subtitle}
      </p>
    </div>
  )
}

export default PageHeader
