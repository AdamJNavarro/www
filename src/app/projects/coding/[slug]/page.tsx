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
        </Page.Header>
        <Section.Container>
          <Section.Header>
            <Section.Title>Built With</Section.Title>
          </Section.Header>
          <Section.Content>
            <CodingProjectStackList project={project} />
          </Section.Content>
        </Section.Container>

        <Section.Container>
          <Section.Header>
            <Section.Title>Written In</Section.Title>
          </Section.Header>
          <Section.Content>
            <GithubRepoLangs project={project} />
          </Section.Content>
        </Section.Container>

        <CodeHighlightTabs
          withCopyButton={false}
          withExpandButton
          defaultExpanded={false}
          expandCodeLabel="Show full"
          collapseCodeLabel="Show less"
          code={[
            {
              fileName: 'dependencies.json',
              code: project.snippets.deps,
              language: 'json',
            },
            {
              fileName: 'devDependencies.json',
              code: project.snippets.devDeps,
              language: 'json',
            },
          ]}
        />
      </Page.Content>
    </Page.Container>
  );
}
