import * as React from "react";

import { CenteredColumn, Page, PageHeader } from "~/components/layout";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "~/components/buttons/PrimaryButton";

function MissingPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex mb-20 justify-center">
          <Image
            alt={"404 Missing page cartoon icon"}
            height="250"
            layout="intrinsic"
            src="/images/missing.svg"
            width="250"
          />
        </div>
        <div className="space-y-10">
          <PageHeader
            subtitle="Unfortunately this page doesn’t exist. Sorry about that."
            title="Uh Oh"
          />
          <div>
            <Link href="/" passHref>
              <a>
                <PrimaryButton>Return Home</PrimaryButton>
              </a>
            </Link>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  );
}

export default MissingPage;
