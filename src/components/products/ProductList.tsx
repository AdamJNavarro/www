import * as React from "react"

import { ProductName, products as allProducts } from "~/data/products"

import { GridItemStyle } from "../grid/GridItem"
import GridList from "../grid/GridList"
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
      <GridList>
        {finalProducts
          .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
          .map((product, index) => {
            const { name, image, url } = product
            return (
              <a
                key={name}
                className={`${GridItemStyle} ${
                  index % 2 == 0 ? "md:-ml-4" : "md:-mr-4"
                }`}
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

                <div className="items-center flex flex-1 pl-2 sm:pl-4 ">
                  <p className="text-lg sm:text-xl font-semibold sm:font-medium text-black dark:text-gray-100">
                    {name}
                  </p>
                </div>
              </a>
            )
          })}
      </GridList>
    </div>
  )
}

export default ProductList
