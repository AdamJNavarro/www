import routes from '~/app/(main)/config/routes';
import { Content, Page } from '~/components/Layouts/Page';

import { StackItem, TechStackGrid } from '~/components/common/TechStack';
import {
  awsStack,
  environmentStack,
  frameworkStack,
  languageStack,
  serviceStack,
  toolStack,
} from '../data/stack';

export const { metadata } = routes.coding;

export default async function CodingPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Coding</Page.Title>
        <Page.Description>What I use, write in, etc.</Page.Description>
      </Page.Header>
      <Content.Header>
        <Content.Title>Languages</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          {languageStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
      <Content.Header>
        <Content.Title>Frameworks</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          {frameworkStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
      <Content.Header>
        <Content.Title>Services</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          {[...serviceStack, ...awsStack].map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
      <Content.Header>
        <Content.Title>Tools</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          {toolStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
      <Content.Header>
        <Content.Title>Environment</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          {environmentStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
    </div>
  );
}
