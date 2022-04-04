import { CenteredColumn, Page } from '~/components/layout';

import Image from 'next/image';
import {
  PersonalEmailIcon,
  PersonalGithubIcon,
  PersonalInstagramIcon,
  PersonalTwitterIcon,
} from '~/components/personal/platforms';

export default function Home() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10" data-cy="about-page">
          <div className="flex my-10 justify-center">
            <Image
              alt={'A photo of me'}
              className="rounded-full"
              height="300"
              layout="intrinsic"
              priority={true}
              src="/images/adam.jpg"
              width="300"
            />
          </div>
          <div className="space-y-6 md:items-center prose">
            <p>Hey there, I'm Adam.</p>
          </div>
          <div className="flex flex-row space-x-10 justify-center">
            <PersonalGithubIcon />
            <PersonalTwitterIcon />
            <PersonalInstagramIcon />
            <PersonalEmailIcon />
          </div>
        </div>
      </CenteredColumn>
    </Page>
  );
}
