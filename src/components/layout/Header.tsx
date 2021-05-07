import * as React from "react"

import { Menu, X } from "react-feather"

import Link from "next/link"
import cntl from "cntl"
import routes from "../../config/routes"
import { useRouter } from "next/router"

const defaultRoutes = [
  routes.home,
  routes.projects,
  routes.books,
  routes.words,
  routes.writing,
]

const headerCN = cntl`
fixed top-0 z-10 w-full py-2 bg-white border-b border-gray-400 md:z-auto md:relative  border-opacity-20 filter-blur
`

export default function Header() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const router = useRouter()
  const currPathName = router.pathname
  const routesAsArr = Object.keys(routes).map((r) => routes[r])
  const mobileTitle =
    currPathName === "/"
      ? "Home"
      : routesAsArr
          .filter((r) => r.path !== "/")
          .find((r) => currPathName.includes(r.path))?.label

  return (
    <div className={headerCN}>
      {/* Mobile nav */}
      <div className="grid grid-cols-1 md:hidden">
        <div className="flex items-center pr-4 text-primary">
          <button
            className="p-4 pl-4 -my-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <X size={16} /> : <Menu size={16} />}
          </button>
          <p className="font-sans text-sm font-semibold text-primary">
            {isExpanded ? "" : `${mobileTitle}`}
          </p>
        </div>
        {isExpanded && (
          <div className="w-full h-px mt-2 bg-gray-1000 bg-opacity-10" />
        )}
        {isExpanded &&
          defaultRoutes.map((route) => {
            const isActive = route.path === router.pathname

            const defaultClasses = `flex font-sans items-center pl-12 py-4 font-semibold text-sm text-primary text-opacity-80`

            return (
              <Link href={route.path} key={route.path}>
                <a
                  className={`${defaultClasses} ${
                    isActive ? `text-purple-700` : ``
                  }`}
                >
                  {route.label}
                </a>
              </Link>
            )
          })}
      </div>
      {/* End mobile nav */}

      {/* Desktop nav */}
      <div className="hidden max-w-screen-md grid-cols-5 gap-2.5 mx-auto md:grid">
        {defaultRoutes.map((route) => {
          const isActive = route.path === router.pathname
          const defaultClasses = `font-sans font-semibold flex rounded items-center text-opacity-40 justify-center py-2 text-sm`
          const activeClasses = `bg-gray-1000 bg-opacity-10 filter-saturate filter-blur`
          const inactiveClasses = `hover:bg-gray-1000 filter-saturate hover:bg-opacity-10 hover:text-gray-1000`
          return (
            <Link href={route.path} key={route.path}>
              <a
                className={`
                ${defaultClasses} 
                ${isActive ? activeClasses : inactiveClasses}`}
              >
                {route.label}
              </a>
            </Link>
          )
        })}
        {/* End desktop nav */}
      </div>
    </div>
  )
}
