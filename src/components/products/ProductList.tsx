import * as React from "react"

import { ProductName, products as allProducts } from "~/data/products"

import Image from "next/image"

type ProductListProps = { label: string; products: any }

const ProductList = ({ label, products }: ProductListProps) => {
  const finalProducts = allProducts.filter((product: any) =>
    products.includes(product.name.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h4 className="capitalize font-sans text-xl font-bold md:text-2xl text-gray-900 dark:text-gray-300">
        {label}
      </h4>
      <div className="space-y-1.5">
        {finalProducts
          .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
          .map((product) => {
            const { name, image, url } = product
            return (
              <a
                key={name}
                className="flex py-4 bg-gray-400 bg-opacity-0 rounded md:-mx-4 sm:p-4 sm:hover:bg-opacity-5 sm:dark:hover:bg-gray-900 sm:dark:hover:bg-opacity-100"
                href={url}
              >
                <Image
                  src={`/images/products/${image}`}
                  width={48}
                  height={48}
                  layout="fixed"
                  alt={`${name} icon`}
                  className="border border-gray-100 rounded-xl dark:border-gray-900 flex-0"
                />

                <div className="items-center flex flex-1 pl-5 ">
                  <p className="text-xl font-medium text-black dark:text-gray-100">
                    {name}
                  </p>
                </div>
              </a>
            )
          })}
      </div>
    </div>
  )
}

export default ProductList
