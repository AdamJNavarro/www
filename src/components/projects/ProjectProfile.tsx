import { CenteredColumn, Page } from "../layout"

import Image from "next/image"
import Link from "next/link"
import ProductList from "../products/ProductList"
import React from "react"

const ProjectProfile = ({ name, image, products, platforms, children }: any) => {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-8">
          <Link href="/projects" passHref>
            <a className="hover:text-purple-600 text-purple-500 dark:text-purple-500 dark:hover:text-purple-400 font-semibold">
              &larr; Projects
            </a>
          </Link>

          <div className="flex flex-col items-center">
            <Image
              width={200}
              height={200}
              layout="fixed"
              className="rounded-3xl"
              src={`/images/projects/${image}`}
              alt={`${name} icon`}
            />
            <div className="flex flex-col items-center mt-10 space-y-2">
              <h1 className="font-sans text-2xl font-black md:text-4xl text-black dark:text-gray-100">
                {name}
              </h1>
            </div>
          </div>

          {platforms && (
            <div className="flex items-center justify-center space-x-10">
              {platforms.ios && (
                <a href={platforms.ios.url}>
                  <div
                    className={`flex items-center rounded justify-center flex-none px-4 py-2 space-x-3 font-medium text-white bg-blue-600`}
                  >
                    Download from Apple
                  </div>
                </a>
              )}
              {platforms.android && (
                <a href={platforms.android.url}>
                  <div
                    className={`flex items-center rounded justify-center flex-none px-4 py-2 space-x-3 font-medium text-white bg-green-600`}
                  >
                    Download from Google
                  </div>
                </a>
              )}
            </div>
          )}

          <div className="mt-10 prose lg:prose-lg">{children}</div>
          {products && <ProductList label="Tech Stack" products={products} />}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default ProjectProfile
