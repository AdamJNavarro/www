import { Page } from '~/components/Layouts/Page';
import routes from '../config/routes';
import { SocialPlatforms } from './Social.data';

export const { metadata } = routes.social;

export default async function SocialPage() {
  return (
    <div>
      <Page.Header>
        <Page.Title>Social Presence</Page.Title>
        <p> Here are the places you can find me online.</p>
      </Page.Header>
      <div className="prose mt-8 mb-16">
        <ul>
          {SocialPlatforms.filter((platform) => platform.show).map((item) => (
            <li key={item.label}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
