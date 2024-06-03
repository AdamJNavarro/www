import routes from '~/app/config/routes';

import { StackItem, TechStackGrid } from '~/components/common/TechStack';
import {
  awsStack,
  environmentStack,
  frameworkStack,
  languageStack,
  serviceStack,
  toolStack,
  experimentingStack,
} from '../data/stack';

export const { metadata } = routes.coding;

export default async function CodingPage() {
  return (
    <div>
      <h1 className="page-h1 text-center">Coding</h1>
      <h2 className="page-h2 text-center">Languages</h2>
      <div className="mb-24">
        <TechStackGrid>
          {languageStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>

      <h2 className="page-h2 text-center">Frameworks</h2>

      <div className="mb-24">
        <TechStackGrid>
          {frameworkStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
      <h2 className="page-h2 text-center">Services</h2>

      <div className="mb-24">
        <TechStackGrid>
          {[...serviceStack, ...awsStack].map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
      <h2 className="page-h2 text-center">Tools</h2>

      <div className="mb-24">
        <TechStackGrid>
          {toolStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
      <h2 className="page-h2 text-center">Environment</h2>

      <div className="mb-24">
        <TechStackGrid>
          {environmentStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>

      <h2 className="page-h2 text-center">Exploring & Experimenting</h2>

      <div className="mb-24">
        <TechStackGrid>
          {experimentingStack.map((item) => (
            <StackItem key={item.name} {...item} />
          ))}
        </TechStackGrid>
      </div>
    </div>
  );
}
