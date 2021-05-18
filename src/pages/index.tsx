import { CenteredColumn, Page } from "../components/layout"

import Image from "next/image"

const email = "adamjnavarro@icloud.com"

export default function Home() {
  return (
    <Page>
      <CenteredColumn>
        <>
          <div className="flex my-10 justify-center">
            <Image
              src="/images/adam.jpg"
              alt={"A photo of me"}
              layout="intrinsic"
              width="350"
              height="350"
              className="rounded-full"
            />
          </div>
          <div className="space-y-6 md:items-center prose">
            <p>
              Hey there, I'm Adam. I enjoy building things and am currently working
              on{" "}
              <a
                href="https://docs.expo.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Expo
              </a>{" "}
              and{" "}
              <a
                href="https://getmomento.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Momento
              </a>
              . Some of my other passions include playing guitar and piano, dancing,
              working out, and helping others in whatever way that I can.
            </p>
            <p>
              I'm not very active on other platforms but you can find me on{" "}
              <a
                href="https://www.instagram.com/adam_nav/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              ,{" "}
              <a
                href="https://twitter.com/AdamJNavarro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/AdamJNavarro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              . If you want to talk about something, don't hesitate to shoot me an{" "}
              <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                email
              </a>
              .
            </p>
          </div>
        </>
      </CenteredColumn>
    </Page>
  )
}
