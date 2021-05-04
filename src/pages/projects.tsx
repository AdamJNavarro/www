import { CenteredColumn, Page } from "../components/layout";

const activeProjects = [
  {
    name: "Expo",
    description:
      "A framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.",
    url: "https://expo.io/home",
  },
  {
    name: "Momento",
    description:
      "A mobile application designed to help people create lasting video memories to be shared with loved ones.",
    url: "https://getmomento.netlify.app/",
  },
  {
    name: "Palette",
    description:
      "Quickly test color palettes and check contrast accessibility scores when designing themes for applications. Built with Expo. A work in progress.",
    url: "https://expo.io/@adamjnav/projects/palette",
  },
];

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
            <div className="space-y-8">
              <h4 className="font-sans text-xl font-bold md:text-2xl text-secondary">
                Active Projects
              </h4>
              <ActiveProjectsList />
            </div>
            <div className="space-y-8">
              <h4 className="font-sans text-xl font-bold md:text-2xl text-secondary">
                Dead Projects
              </h4>
              <DeadProjectsList />
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  );
}

const ActiveProjectsList = () => {
  return (
    <div className="prose space-y-6">
      {activeProjects.map((project) => {
        const { name, url, description } = project;
        return (
          <div className="space-y-1">
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
        );
      })}
    </div>
  );
};

const DeadProjectsList = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="font-medium">Nexus</p>
        <p className="text-tertiary">
          A mobile application that aimed to enhance the social experience of
          going out to bars and clubs. Needless to say it did not take off but
          it was how I learned to code and ultimately led me to Expo.
        </p>
      </div>
    </div>
  );
};
