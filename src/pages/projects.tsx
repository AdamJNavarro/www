import { CenteredColumn, Page } from "../components/layout";

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
              <ActiveProjectList />
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

const ActiveProjectList = () => {
  return (
    <div className="prose space-y-6">
      <div className="space-y-1">
        <a
          href="https://expo.io/home"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium highlight-link-hover"
        >
          Expo
        </a>

        <p className="text-tertiary">
          A framework and a platform for universal React applications. It is a
          set of tools and services built around React Native and native
          platforms that help you develop, build, deploy, and quickly iterate on
          iOS, Android, and web apps from the same JavaScript/TypeScript
          codebase.
        </p>
      </div>

      <div className="space-y-1">
        <a
          href="https://getmomento.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium highlight-link-hover"
        >
          Momento
        </a>

        <p className="text-tertiary">
          A mobile application designed to help people create lasting video
          memories to be shared with loved ones.
        </p>
      </div>
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
