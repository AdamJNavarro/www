import routes from '~/app/config/routes';
import { Content, Page } from '~/components/Layouts/Page';

import {
  Environment,
  Frameworks,
  Languages,
  Services,
  TechStackGrid,
} from '~/components/common/TechStack';

export const { metadata } = routes.coding;

export default async function CodingPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Coding</Page.Title>
        <p>What I use, write in, etc.</p>
      </Page.Header>
      <Content.Header>
        <Content.Title>Languages</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          <Languages.JavaScript />
          <Languages.TypeScript />
          <Languages.Html />
          <Languages.Css />
        </TechStackGrid>
      </div>
      <Content.Header>
        <Content.Title>Frameworks</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          <Frameworks.NextJs />
          <Frameworks.React />
          <Frameworks.Tailwindcss />
          <Frameworks.Mantine />
          <Frameworks.Cypress />
          <Frameworks.ReactNative />
          <Frameworks.Expo />
        </TechStackGrid>
      </div>
      <Content.Header>
        <Content.Title>Services</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          <Services.Vercel />
          <Services.Github />
          <Services.Cloudinary />
          <Services.EAS />
        </TechStackGrid>
      </div>
      <Content.Header>
        <Content.Title>Environment</Content.Title>
      </Content.Header>
      <div className="mt-8 mb-24">
        <TechStackGrid>
          <Environment.VSCode />
          <Environment.Iterm />
          <Environment.CodeWhisperer />
          <Environment.OhMyZsh />
          <Environment.AndroidStudio />
          <Environment.Xcode />
        </TechStackGrid>
      </div>
    </div>
  );
}
