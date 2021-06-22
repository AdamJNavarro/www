import React, { useState } from "react"

import { ErrorAlert } from "../alerts"
import PrimaryButton from "../buttons/PrimaryButton"
import { Textarea } from "../inputs"

export default function RecoBox() {
  const [book, setBook] = useState("")
  const [serverState, setServerState] = React.useState({
    submitting: false,
    submitted: false,
    error: false,
  })

  function onChange(e) {
    return setBook(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true, submitted: false, error: false })

    fetch("https://formspree.io/f/mvodknev", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setServerState({
          submitting: false,
          submitted: true,
          error: false,
        })
        //form.reset()
        //setBook("")
      } else {
        response.json().then((data) => {
          setServerState({
            submitting: false,
            submitted: true,
            error: data.error,
          })
        })
      }
    })
  }

  return (
    <div className="p-5 space-y-3 border-4  border-gray-300 border-double dark:border-gray-700">
      <div className="prose">
        <p className="flex items-center font-bold">Got a recommendation?</p>
      </div>

      <form className="items-stretch space-y-4" onSubmit={handleSubmit}>
        <Textarea
          disabled={serverState.submitted && !serverState.error}
          name="recommendation"
          onChange={onChange}
          placeholder="Title and Author"
          value={book}
        />
        <div className="flex justify-center">
          <PrimaryButton
            className="w-1/2"
            disabled={serverState.submitting || serverState.submitted || !book}
            type="submit"
          >
            {serverState.submitted && !serverState.error ? "Thank You!" : "Submit"}
          </PrimaryButton>
        </div>
        {serverState.submitted && serverState.error && (
          <ErrorAlert>{serverState.error}</ErrorAlert>
        )}
      </form>
    </div>
  )
}
