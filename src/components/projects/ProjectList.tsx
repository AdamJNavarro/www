import Image from "next/image";
import Link from "next/link";

type ProjectListProps = { label: string; projects: any[] };

const ProjectList = ({ label, projects }: ProjectListProps) => {
  return (
    <div className="space-y-6">
      <h4 className="font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        {label}
      </h4>
      <div className="space-y-8">
        {projects.map((project) => {
          return <ProjectItem key={project.slug} {...project} />;
        })}
      </div>
    </div>
  );
};

const ProjectItem = ({ name, slug, description, image, platforms }) => {
  return (
    <Link href={`/projects/${slug}`} passHref>
      <a
        className="flex py-4 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
        key={name}
      >
        <Image
          alt={`${name} icon`}
          className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
          height={64}
          layout="fixed"
          src={`/images/projects/${image}`}
          width={64}
        />

        <div className="justify-center flex-1 col-span-3 pl-5 space-y-3.5">
          <div className="space-y-1 ">
            <p className="capitalize mt-1 font-medium text-black dark:text-gray-100">
              {name}
            </p>
            <p className="text-base font-normal text-gray-800 dark:text-gray-200">
              {description}
            </p>
          </div>
          {platforms && (
            <div className="flex space-x-2">
              {platforms.android && (
                <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide text-green-600 bg-green-500 bg-opacity-15  dark:text-green-400 dark:border-green-400 dark:bg-opacity-30">
                  Android
                </span>
              )}
              {platforms.ios && (
                <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide text-blue-600 bg-blue-500 bg-opacity-15 dark:text-blue-400 dark:border-blue-400 dark:bg-opacity-30">
                  iOS
                </span>
              )}
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

export default ProjectList;
