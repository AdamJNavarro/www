import * as React from "react"

import Image from "next/image"
import { languages } from "~/data/languages"

const LanguageList = ({}) => {
  return (
    <div className="space-y-6">
      <h4 className="font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        Languages
      </h4>
      <div className="space-y-1.5">
        {languages.map((language) => {
          const { name, image } = language
          return (
            <div
              key={`langkey-${name}`}
              className="flex py-4 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4"
            >
              <Image
                src={`/images/languages/${image}`}
                width={48}
                height={48}
                layout="fixed"
                alt={`${name} logo`}
                className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
              />

              <div className="items-center flex flex-1 pl-5 ">
                <p className="text-xl capitalize  font-medium text-black dark:text-gray-100">
                  {name}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageList
