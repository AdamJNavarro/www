import * as React from "react"

const styles =
  "w-full rounded focus:outline-none px-4 py-2 focus:border-gray-1000 border-gray-300 dark:border-gray-700 dark:focus:border-gray-600 bg-gray-200 dark:bg-gray-200 focus:ring-0"

export function Input(props) {
  return <input className={styles} {...props} />
}
