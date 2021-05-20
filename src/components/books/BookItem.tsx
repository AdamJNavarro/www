import React, { useState } from "react"

import useMediaQuery from "~/helpers/useMediaQuery"

const BookItem = ({ title, author, takeaway, url }: any) => {
  const [showFull, setShowFull] = useState(false)

  const isMobile = useMediaQuery(640)

  return (
    <div key={title} className="space-y-1">
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="italic">
          {title}
        </a>{" "}
        by {author}
      </p>
      {isMobile ? (
        <>
          <p>{showFull ? takeaway : takeaway.slice(0, 300) + "..."}</p>
          <span
            className="text-purple-300 font-normal"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? "Show Less" : "Read More"}
          </span>
        </>
      ) : (
        <p>{takeaway}</p>
      )}
    </div>
  )
}

export default BookItem
