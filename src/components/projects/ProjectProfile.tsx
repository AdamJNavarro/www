import { CenteredColumn, Page } from "../layout"

import Image from "next/image"
import Link from "next/link"
import ProductList from "../products/ProductList"
import React from "react"

const ProjectProfile = ({ name, image, children }: any) => {
  return (
    <Page>
      <CenteredColumn>
        <div className="space-y-8">
          <Link href="/projects" passHref>
            <a className="hover:text-purple-600 text-purple-500 dark:text-purple-500 dark:hover:text-purple-400 font-semibold">
              &larr; Projects
            </a>
          </Link>

          <div className="flex items-center space-x-4">
            <Image
              width={"72px"}
              height={"72px"}
              layout="fixed"
              className="rounded-xl"
              src={`/images/projects/${image}`}
              alt={`${name} icon`}
            />
            <div>
              <h1 className="font-sans text-2xl font-black md:text-4xl text-black dark:text-gray-100">
                {name}
              </h1>
              <p className="text-gray-800 dark:text-gray-200">
                Something should go here.
              </p>
            </div>
          </div>
          <div className="prose">{children}</div>

          <ProductList
            label="Tech Stack"
            products={["apollo", "aws", "cloudinary", "expo"]}
          />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default ProjectProfile
