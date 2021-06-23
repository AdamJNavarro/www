import React, { useState } from "react";

import useMediaQuery from "~/helpers/useMediaQuery";

const BookItem = ({ title, author, takeaway, url }: any) => {
  const [showFull, setShowFull] = useState(false);

  const isMobile = useMediaQuery(640);

  return (
    <div className="space-y-1" key={title}>
      <p>
        <a className="italic" href={url} rel="noopener noreferrer" target="_blank">
          {title}
        </a>{" "}
        by {author}
      </p>
      {isMobile ? (
        <>
          <p>{showFull ? takeaway : takeaway.slice(0, 300) + "..."}</p>
          <span
            className="text-purple-500 dark:text-purple-300 font-normal"
            onClick={() => setShowFull(!showFull)}
          >
            {showFull ? "Show Less" : "Read More"}
          </span>
        </>
      ) : (
        <p>{takeaway}</p>
      )}
    </div>
  );
};

export default BookItem;
