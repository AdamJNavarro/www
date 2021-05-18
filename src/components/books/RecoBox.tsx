import { ErrorAlert, SuccessAlert } from "../alerts"
import React, { useState } from "react"

import { Input } from "../inputs"
import PrimaryButton from "../buttons/PrimaryButton"

export default function RecoBox() {
  const [book, setBook] = useState("")
  const [status, setStatus] = useState("pending")
  const [errorMessage, setErrorMessage] = useState("")

  function onChange(e) {
    if (status !== "pending") setStatus("pending")
    return setBook(e.target.value.trim())
  }

  async function submit(e) {
    e.preventDefault()

    setBook("")
    setStatus("succeeded")
  }

  return (
    <div className="p-7 space-y-4 border-4 -mx-2 border-gray-300 border-double dark:border-gray-700 bg-elevated">
      <div className="prose">
        <p className="flex items-center font-bold">Know of a book I should read?</p>
        <p>
          If you have a book in mind that you think I would enjoy, please let me
          know!
        </p>
      </div>
      {status === "succeeded" ? (
        <SuccessAlert>Thanks for the recommendation!</SuccessAlert>
      ) : (
        <form
          onSubmit={submit}
          className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-3"
        >
          <label className="md:col-span-2">
            <span className="sr-only">Book title</span>
            <Input
              value={book}
              disabled={status === "loading"}
              onChange={onChange}
              placeholder="Book title and author"
              type="email"
              name="email"
            />
          </label>
          <PrimaryButton
            onClick={submit}
            disabled={status === "submitting" || !book}
            type="submit"
            className="w-full"
          >
            Submit
          </PrimaryButton>
        </form>
      )}
      {status === "error" && <ErrorAlert>{errorMessage}</ErrorAlert>}
    </div>
  )
}
