import { CenteredColumn, Page } from "../layout"
import React, { useEffect, useState } from "react"
import { isAndroid, isIOS } from "~/helpers/window"

import Image from "next/image"
import ProductList from "../products/ProductList"

const ProjectProfile = ({
  name,
  image,
  products,
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
                width={200}
                height={200}
                layout="fixed"
                className="rounded-3xl"
                src={`/images/projects/${image}`}
                alt={`${name} icon`}
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
          {products && (
            <ProductList label="🛠 &nbsp;Tech Stack" products={products} />
          )}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default ProjectProfile
