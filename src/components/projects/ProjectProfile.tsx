import { CenteredColumn, Page } from "../layout"
import React, { useEffect, useState } from "react"
import { isAndroid, isIOS } from "~/helpers/window"

import Image from "next/image"
import ProductList from "../products/ProductList"

const ProjectProfile = ({
  name,
  image,
  stack,
  platforms,
  webUrl,
  children,
}: any) => {
  const [showIOS, setShowIOS] = useState(true)
  const [showAndroid, setShowAndroid] = useState(true)

  useEffect(() => {
    if (isIOS()) setShowAndroid(false)
    if (isAndroid()) setShowIOS(false)
  }, [])

  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-8">
          <div className="flex flex-col items-center">
            <a href={webUrl}>
              <Image
                alt={`${name} icon`}
                className="rounded-3xl"
                height={200}
                layout="fixed"
                priority
                src={`/images/projects/${image}`}
                width={200}
              />
            </a>
            <div className="flex flex-col items-center mt-10 space-y-2">
              <h1 className="font-sans text-2xl font-black md:text-4xl text-black dark:text-gray-100">
                {name}
              </h1>
            </div>
          </div>

          {platforms && (
            <div className="flex items-center justify-center space-x-10">
              {platforms.ios && showIOS && (
                <a href={platforms.ios.url}>
                  <div
                    className={`flex items-center rounded-md justify-center flex-none px-4 py-2 space-x-3 font-medium text-white bg-purple-700`}
                  >
                    Download from App Store
                  </div>
                </a>
              )}
              {platforms.android && showAndroid && (
                <a href={platforms.android.url}>
                  <div
                    className={`flex items-center rounded-md justify-center flex-none px-4 py-2 space-x-3 font-medium text-white bg-purple-700`}
                  >
                    Download from Play Store
                  </div>
                </a>
              )}
            </div>
          )}

          <div className="mt-10 prose lg:prose-lg">{children}</div>

          {stack && (
            <div className="space-y-8">
              <h3 className="font-sans text-xl font-black md:text-3xl text-black dark:text-gray-200">
                Tech Stack
              </h3>
              <div className="space-y-10">
                {Object.entries(stack).map((section) => {
                  return (
                    <ProductList
                      key={`${section[0]}-stack-list`}
                      label={section[0]}
                      products={section[1]}
                    />
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default ProjectProfile
