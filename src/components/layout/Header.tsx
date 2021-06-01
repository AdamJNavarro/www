import * as React from "react"

import { FiMenu as Menu, FiX as X } from "react-icons/fi"

import Link from "next/link"
import routes from "../../config/routes"
import { useRouter } from "next/router"

const defaultRoutes = [
  routes.about,
  routes.projects,
  routes.books,
  routes.words,
  routes.writing,
]

const HeaderContainer = ({
  baseClasses,
  breakpointClasses,
  darkClasses,
  children,
}: any) => {
  return (
    <div className={`${baseClasses} ${breakpointClasses} ${darkClasses}`}>
      {children}
    </div>
  )
}

export default function Header() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const router = useRouter()
  const currPathName = router.pathname
  const routesAsArr = Object.keys(routes).map((r) => routes[r])
  const mobileTitle =
    currPathName === "/"
      ? "About"
      : routesAsArr
          .filter((r) => r.path !== "/")
          .find((r) => currPathName.includes(r.path))?.label

  return (
    <HeaderContainer
      baseClasses="fixed top-0 z-10 w-full py-2 bg-white border-b border-opacity-20 border-gray-400 filter-blur"
      breakpointClasses="md:z-auto md:relative md:bg-opacity-70"
      darkClasses="dark:bg-gray-900 dark:bg-opacity-90 dark:border-opacity-10"
    >
      {/* Mobile nav */}
      <div className="grid grid-cols-1 md:hidden">
        <div className="flex items-center pr-4 text-primary">
          <button
            className="p-4 pl-4 -my-2 dark:text-white"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <X size={16} /> : <Menu size={16} />}
          </button>
          <p className="font-sans text-sm font-semibold dark:text-gray-100">
            {mobileTitle}
          </p>
        </div>
        {isExpanded && (
          <div className="w-full h-px mt-2 bg-gray-1000 bg-opacity-10" />
        )}
        {isExpanded &&
          defaultRoutes.map((route) => {
            const isActive = route.path === router.pathname

            const defaultClasses = `flex font-sans items-center pl-12 py-4 font-semibold dark:text-white`

            return (
              <Link href={route.path} key={route.path}>
                <a
                  className={`${defaultClasses} ${
                    isActive ? `text-indigo-700 dark:text-purple-500` : ``
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
          const defaultClasses = `font-sans font-semibold flex rounded items-center text-opacity-40 justify-center py-2 text-sm dark:text-white`
          const activeClasses = `bg-gray-1000 bg-opacity-10 filter-saturate filter-blur dark:bg-white dark:text-opacity-100`
          const inactiveClasses = `hover:bg-gray-1000 filter-saturate hover:bg-opacity-10 hover:text-gray-1000 dark:hover:bg-white dark:text-opacity-70 dark:hover:text-gray-100 `
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
        {/* End desktop nav */}
      </div>
    </HeaderContainer>
  )
}
