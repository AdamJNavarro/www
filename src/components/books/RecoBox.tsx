import { ErrorAlert, SuccessAlert } from "../alerts"
import React, { useState } from "react"

import PrimaryButton from "../buttons/PrimaryButton"
import { Textarea } from "../inputs"

export default function RecoBox() {
  const [book, setBook] = useState("")
  const [status, setStatus] = useState("pending")
  const [errorMessage, setErrorMessage] = useState("")

  function onChange(e) {
    if (status !== "pending") setStatus("pending")
    return setBook(e.target.value)
  }

  async function submit(e) {
    e.preventDefault()

    setBook("")
    setStatus("succeeded")
  }

  return (
    <div className="p-7 space-y-4 border-4 -mx-2 border-gray-300 border-double dark:border-gray-700">
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
        <form onSubmit={submit} className="items-stretch space-y-4">
          <Textarea
            value={book}
            disabled={status === "loading"}
            onChange={onChange}
            placeholder="Book title and author"
            name="recommendation"
          />
          {book.length > 0 && (
            <div className="flex justify-center">
              <PrimaryButton
                onClick={submit}
                disabled={status === "submitting" || !book}
                type="submit"
                className="w-1/2"
              >
                Submit
              </PrimaryButton>
            </div>
          )}
        </form>
      )}
      {status === "error" && <ErrorAlert>{errorMessage}</ErrorAlert>}
    </div>
  )
}
