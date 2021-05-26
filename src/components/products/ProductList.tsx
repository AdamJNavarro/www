import * as React from "react"

import { ProductName, products as allProducts } from "~/data/products"

import Image from "next/image"

type ProductListProps = { label: string; products: ProductName[]; showAll?: boolean }

const ProductList = ({ label, products, showAll = false }: ProductListProps) => {
  const finalProducts = showAll
    ? allProducts
    : allProducts.filter((product: any) => products.includes(product.name))

  return (
    <div className="space-y-6">
      <h4 className="font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        {label}
      </h4>
      <div className="space-y-1">
        {finalProducts
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((product) => {
            const { name, image, description, url, openSource } = product
            const hasBadges = false /// TEMPHACK TO HIDE BADGES UNTIL PROPERLY STYLED
            return (
              <a
                key={name}
                className="flex py-4 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
                href={url}
              >
                <Image
                  src={`/images/products/${image}`}
                  width={64}
                  height={64}
                  layout="fixed"
                  alt={`${name} icon`}
                  className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
                />

                <div className="justify-center flex-1 col-span-3 pl-5 space-y-3.5">
                  <div className="space-y-1 ">
                    <p className="capitalize mt-1 font-medium text-black dark:text-gray-100">
                      {name}
                    </p>
                    <p className="text-base font-normal text-gray-800 dark:text-gray-200">
                      {description}
                    </p>
                  </div>
                  {hasBadges && (
                    <div className="flex space-x-2">
                      {openSource && (
                        <span className="self-start rounded px-3 py-0.5 text-sm font-medium leading-5 tracking-wide dark:text-green-400 dark:border-green-400 text-green-600 bg-green-500 bg-opacity-5 dark:bg-opacity-20">
                          Open Source
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default ProductList
