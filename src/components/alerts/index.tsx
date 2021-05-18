export function ErrorAlert({ children }) {
  return (
    <p className="p-2 text-center text-white font-medium  bg-red-500">{children}</p>
  )
}

export function SuccessAlert({ children }) {
  return (
    <p className="p-2 text-center text-white font-medium bg-green-500">{children}</p>
  )
}
