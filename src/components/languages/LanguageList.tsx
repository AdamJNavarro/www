import * as React from "react"

import GridList from "../grid/GridList"
import Image from "next/image"
import { languages } from "~/data/languages"

const LanguageList = () => {
  return (
    <div className="space-y-6">
      <h4 className="font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        Languages
      </h4>
      <GridList>
        {languages.map((language, index) => {
          const { name, image } = language
          return (
            <div
              className={`flex py-4 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 ${
                index % 2 == 0 ? "md:-ml-4" : "md:-mr-4"
              }`}
              key={`langkey-${name}`}
            >
              <Image
                alt={`${name} logo`}
                className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
                height={48}
                layout="fixed"
                src={`/images/languages/${image}`}
                width={48}
              />

              <div className="items-center flex flex-1 pl-2 sm:pl-4 ">
                <p className="capitalize text-lg sm:text-xl font-semibold sm:font-mediumtext-black dark:text-gray-100">
                  {name}
                </p>
              </div>
            </div>
          )
        })}
      </GridList>
    </div>
  )
}

export default LanguageList
