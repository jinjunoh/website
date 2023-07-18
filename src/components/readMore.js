import React from "react";
import { useState } from "react";

const ReadMore = ({text}) => {

  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = text.slice(0, 100);
  const fullText = text;

  const handleReadMoreClick = () => {
    setShowFullText(true);
  };

  return (
    <div>
      {showFullText ? (
        <p>{fullText}</p>
      ) : (
        <p>
          {truncatedText}
          <button onClick={handleReadMoreClick}>
            Read More
          </button>
        </p>
      )}
    </div>
  );
}
export default ReadMore;

