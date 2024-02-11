'use client';

import { useRef } from 'react';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import GithubRepoLangs from '~/app/interests/coding/GithubRepoLangs';
import { codingProjects } from '~/app/interests/coding/coding.data';
import { Page, Section } from '~/components/common';
import CodingProjectStackList from '~/app/interests/coding/CodingProjectStackList';

export default function CodingProject({ params }: any) {
  const scrollRef = useRef(null);
  const titleRef = useRef(null);

  const project = codingProjects.find((proj) => proj.slug === params.slug);

  if (!project) return <p>Project not found...</p>;

  return (
    <Page.Container ref={scrollRef}>
      <Page.Content>
        <Page.Header>
          <Page.Title ref={titleRef}>{project.name}</Page.Title>
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

        <Section.Container>
          <Section.Header>
            <Section.Title>Written In</Section.Title>
            <Section.Description>
              A breakdown of the languages used according to Github.
            </Section.Description>
          </Section.Header>
          <Section.Content>
            <GithubRepoLangs project={project} />
          </Section.Content>
        </Section.Container>

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
                  code: project.snippets.deps,
                  language: 'json',
                },
                {
                  fileName: 'devDependencies',
                  code: project.snippets.devDeps,
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
      </Page.Content>
    </Page.Container>
  );
}
