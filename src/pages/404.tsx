import * as React from "react"

import { CenteredColumn, Page, PageHeader } from "~/components/layout"

import Link from "next/link"
import PrimaryButton from "~/components/buttons/PrimaryButton"

function MissingPage() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-12">
          <PageHeader
            title="Uh Oh"
            subtitle="We got a 404 on our hands and unfortunately that means this page doesn’t exist."
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
  )
}

export default MissingPage
