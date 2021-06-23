import { CenteredColumn, Page } from "~/components/layout"
import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi"

import Image from "next/image"
import Link from "next/link"

const email = "adamjnavarro@icloud.com"

const platforms = [
  {
    icon: FiInstagram,
    name: "Instagram",
    url: "https://www.instagram.com/adamjnavarro/",
  },
  {
    icon: FiTwitter,
    name: "Twitter",
    url: "https://twitter.com/AdamJNavarro",
  },
  {
    icon: FiGithub,
    name: "Github",
    url: "https://github.com/AdamJNavarro",
  },
]

export default function Home() {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-10">
          <div className="flex my-10 justify-center">
            <Image
              alt={"A photo of me"}
              className="rounded-full"
              height="300"
              layout="intrinsic"
              priority={true}
              src="/images/adam.jpg"
              width="300"
            />
          </div>
          <div className="space-y-6 md:items-center prose">
            <p>
              Hey there, I'm Adam. I enjoy building things and am currently working
              on{" "}
              <Link href="/projects/expo" passHref>
                <a>Expo</a>
              </Link>{" "}
              and{" "}
              <Link href="/projects/momento" passHref>
                <a>Momento</a>
              </Link>
              . If you're interested in what technologies I use you can check out my{" "}
              <Link href="/stack" passHref>
                <a>Tech Stack</a>
              </Link>
              . Some of my other passions include playing guitar and piano,{" "}
              <Link href="/dancing" passHref>
                <a>dancing</a>
              </Link>
              ,{" "}
              <Link href="/music" passHref>
                <a>music</a>
              </Link>
              , working out, and helping others in whatever way that I can. If you
              want to talk about something, don't hesitate to shoot me an{" "}
              <a href={`mailto:${email}`} rel="noopener noreferrer" target="_blank">
                email
              </a>
              .
            </p>
          </div>
          <div className="flex flex-row space-x-10 justify-center">
            {platforms.map((platform) => {
              const { name, url, icon: Icon } = platform
              return (
                <a
                  className="text-3xl no-underline text-purple-500 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-400"
                  href={url}
                  key={name}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
