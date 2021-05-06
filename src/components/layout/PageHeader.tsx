//type PageHeaderProps = {title: string; subtitle?: string}

const PageHeader = ({ title, subtitle }: any) => {
  return (
    <div className="space-y-1">
      <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">
        {title}
      </h1>
      <p className="font-sans text-lg leading-snug md:text-xl text-tertiary">
        {subtitle}
      </p>
    </div>
  )
}

export default PageHeader
