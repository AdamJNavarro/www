import React, { useState } from "react"

/// TODO: Find way to only use read more fx on small devices (multiple breakpoint conditionals seems a little hacky)

const BookItem = ({ title, author, takeaway, url }: any) => {
  const [showFull, setShowFull] = useState(false)

  return (
    <div key={title} className="space-y-1">
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="italic">
          {title}
        </a>{" "}
        by {author}
      </p>
      <p>{showFull ? takeaway : takeaway.slice(0, 300) + "..."}</p>
      <span
        className="text-purple-300 font-normal md:hidden md:invisible"
        onClick={() => setShowFull(!showFull)}
      >
        {showFull ? "Show Less" : "Read More"}
      </span>
    </div>
  )
}

export default BookItem
