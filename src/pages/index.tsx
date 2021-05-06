import { CenteredColumn, Page } from "../components/layout"

import Image from "next/image"

export default function Home() {
  return (
    <Page>
      <CenteredColumn>
        <>
          <div className="flex my-10">
            <Image
              src="/images/adam.jpg"
              alt={"A photo of me"}
              layout="intrinsic"
              width="500"
              height="500"
              className="rounded-full"
            />
          </div>
          <div className="space-y-6 md:items-center prose">
            <p>
              Hey, I'm Adam Navarro. I'm still workshoping what I want to say on this
              about page so for the time being this placeholder paragraph will have
              to suffice. I'll update this in the near future...hopefully.
            </p>
          </div>
        </>
      </CenteredColumn>
    </Page>
  )
}
