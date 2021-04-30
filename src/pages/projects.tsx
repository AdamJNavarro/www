import { CenteredColumn, Page } from "../components/layout";

import Link from "next/link";
export default function ProjectsPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <div className="space-y-2">
            <h1 className="font-sans text-2xl font-black md:text-4xl text-primary">
              Projects
            </h1>
            <p className="font-sans text-xl leading-snug md:text-2xl text-tertiary">
              Various things I've created or worked on.
            </p>
          </div>
          <div className="space-y-16 md:space-y-24">
            <div className="space-y-8">
              <ProjectList />
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  );
}

const ProjectList = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <a
          href="https://staff.design"
          className="font-medium highlight-link-hover"
        >
          Staff Design
        </a>

        <p className="text-tertiary">
          A collection of interviews exploring how product designers navigate
          the individual contributor path to its highest levels.
        </p>
      </div>

      <div className="space-y-1">
        <Link passHref href="/stack">
          <a className="font-medium highlight-link-hover">My Stack</a>
        </Link>

        <p className="text-tertiary">
          A curated list of my favorite tools and software.
        </p>
      </div>

      <div className="space-y-1">
        <Link passHref href="/security">
          <a className="font-medium highlight-link-hover">Security Checklist</a>
        </Link>

        <p className="text-tertiary">
          Tools and resources for staying safe on the internet.
        </p>
      </div>

      <div className="space-y-1">
        <Link passHref href="/bookmarks">
          <a className="font-medium highlight-link-hover">Bookmarks</a>
        </Link>

        <p className="text-tertiary">Internet things, saved for later.</p>
      </div>

      <div className="space-y-1">
        <Link passHref href="/ama">
          <a className="font-medium highlight-link-hover">AMA</a>
        </Link>

        <p className="text-tertiary">Ask me anything.</p>
      </div>

      <div className="space-y-1">
        <Link passHref href="/hn">
          <a className="font-medium highlight-link-hover">Better Hacker News</a>
        </Link>

        <p className="text-tertiary">A better Hacker News.</p>
      </div>

      <div className="space-y-1">
        <Link passHref href="/app-dissection">
          <a className="font-medium highlight-link-hover">App Dissection</a>
        </Link>

        <p className="text-tertiary">
          In-depth explorations of visual and interaction design in well-known
          apps.
        </p>
      </div>
    </div>
  );
};
