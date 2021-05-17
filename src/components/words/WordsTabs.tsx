import * as React from "react"

import Link from "next/link"
import { useRouter } from "next/router"

const routes = {
  all: {
    label: "All",
    path: "/words",
  },
  2021: {
    label: "2021",
    path: "/words/2021",
  },
  2020: {
    label: "2020",
    path: "/words/2020",
  },
  2019: {
    label: "2019",
    path: "/words/2019",
  },
  2018: {
    label: "2018",
    path: "/words/2018",
  },
}

const defaultRoutes = [
  routes.all,
  routes[2021],
  routes[2020],
  routes[2019],
  routes[2018],
]

export default function WordsTabs() {
  const router = useRouter()
  //const currPathName = router.pathname
  //const routesAsArr = Object.keys(routes).map((r) => routes[r])

  const defaultClasses = `font-sans font-semibold flex rounded items-center text-opacity-40 justify-center py-2 text-sm dark:text-white`
  const activeClasses = `bg-gray-1000 bg-opacity-10 filter-saturate filter-blur dark:bg-white dark:text-opacity-100`
  const inactiveClasses = `hover:bg-gray-1000 filter-saturate hover:bg-opacity-10 hover:text-gray-1000 dark:hover:bg-white dark:text-opacity-70 dark:hover:text-gray-100 `
  return (
    <div className="hidden grid-cols-5 gap-2 overflow-x-auto md:grid tabbed-navigation md:justify-center md:-ml-0 md:-mr-0 flex-nowrap">
      {defaultRoutes.map((route) => {
        return (
          <Link href={route.path} key={route.path}>
            <a
              className={`
              ${defaultClasses} 
              ${route.path === router.pathname ? activeClasses : inactiveClasses}`}
            >
              {route.label}
            </a>
          </Link>
        )
      })}
    </div>
  )
}
