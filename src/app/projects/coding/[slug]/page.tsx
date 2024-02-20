import { CodeHighlightTabs } from '@mantine/code-highlight';
import { Suspense } from 'react';
import { codingProjects } from '~/app/interests/coding/coding.data';
import { Page, Section } from '~/components/common';
import CodingProjectStackList from '../CodingProjectStackList';
import {
  getGithubRepoDependencies,
  getGithubRepoLanguages,
} from '~/app/data/github';
import GithubRepoLanguages from '../GithubRepoLanguages';
import { LoadingSpinner } from '~/components/common/pure-html';

export default function CodingProject({ params }: any) {
  const project = codingProjects.find((proj) => proj.slug === params.slug);

  if (!project) return <p>Project not found...</p>;

  return (
    <Page.Container>
      <Page.Content>
        <Page.Header>
          <Page.Title>{project.name}</Page.Title>
          <Page.Description>{project.description}</Page.Description>
        </Page.Header>
        <Section.Container>
          <Section.Header>
            <Section.Title>Tech Stack</Section.Title>
            <Section.Description>
              The frameworks and services used.
            </Section.Description>
          </Section.Header>
          <Section.Content>
            <CodingProjectStackList project={project} />
          </Section.Content>
        </Section.Container>

        <Suspense fallback={<LoadingSpinner />}>
          <LanguagesSection github={project.github} />
          <DependenciesSection github={project.github} />
        </Suspense>
      </Page.Content>
    </Page.Container>
  );
}

async function LanguagesSection({ github }: any) {
  const { data, error } = await getGithubRepoLanguages({
    owner: github.owner,
    repo: github.repo,
  });

  if (error) return null;

  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Written In</Section.Title>
        <Section.Description>
          A breakdown of the languages used according to Github.
        </Section.Description>
      </Section.Header>
      <Section.Content>
        <GithubRepoLanguages data={data} />
      </Section.Content>
    </Section.Container>
  );
}

async function DependenciesSection({ github }: any) {
  const { data, error } = await getGithubRepoDependencies({
    owner: github.owner,
    repo: github.repo,
  });

  if (error) return null;

  return (
    <Section.Container>
      <Section.Header>
        <Section.Title>Under the Hood</Section.Title>
        <Section.Description>Here are the packages used.</Section.Description>
      </Section.Header>
      <Section.Content>
        <CodeHighlightTabs
          withCopyButton={false}
          code={[
            {
              fileName: 'dependencies',
              code: data.deps,
              language: 'json',
            },
            {
              fileName: 'devDependencies',
              code: data.devDeps,
              language: 'json',
            },
          ]}
          styles={{
            root: {
              borderRadius: 'var(--mantine-radius-md)',
            },
          }}
        />
      </Section.Content>
    </Section.Container>
  );
}
