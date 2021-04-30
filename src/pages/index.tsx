import { CenteredColumn, Page } from "../components/layout";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const renderMockContent = () => {
    return (
      <div className="space-y-16 md:space-y-24 ">
        <div className="space-y-8 md:items-center">
          <div className="prose lg:prose-lg text-primary">
            <p>
              Hey, I&apos;m Brian. I&apos;m a designer,{" "}
              <a href="https://designdetails.fm">podcaster</a>,{" "}
              <Link href="/writing" passHref>
                <a>writer</a>
              </Link>
              , and{" "}
              <a href="https://github.com/brianlovin">software tinkerer</a>.
              I&apos;m currently building{" "}
              <a href="https://github.com/mobile">
                native mobile apps at GitHub
              </a>
              .
            </p>

            <p>
              In the past I co-founded{" "}
              <a href="https://github.com/withspectrum/spectrum">Spectrum</a>, a
              platform for online communities. Before that, I worked at Facebook
              building payments systems, and cut my teeth as a product designer
              at Buffer.
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="space-y-16 md:space-y-24 ">
        <div className="-mx-4 -mt-16 md:mt-0 md:-mx-8 ">
          <Image
            src="/images/adam.jpg"
            alt={"A photo of me"}
            layout="fixed"
            width="500"
            height="500"
            className="md:rounded-lg"
          />
        </div>
        <div className="space-y-8 md:items-center">
          <p>
            Hey, I'm Adam Navarro. I'm currently making this website to get
            better at web development, share my writing and thoughts as well as
            use it as a skill showcase. I'm currently working at{" "}
            <a href="https://docs.expo.io/">Expo.</a>
          </p>
        </div>
      </div>
    );
  };

  const showMock = false;

  return (
    <Page>
      <CenteredColumn>
        {showMock ? renderMockContent() : renderContent()}
      </CenteredColumn>
    </Page>
  );
}
