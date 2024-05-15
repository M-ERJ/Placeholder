import React, { useState } from "react";

const Review: React.FC = () => {
  const [showReview, setShowReview] = useState<boolean>(false);

  const handleToggle = (): void => {
    setShowReview(!showReview);
  };

  return (
    <div className="container" style={{ display: "inline" }}>
      <button
        onClick={handleToggle}
        className="mt-4 bg-pi-main text-black font-bold py-2 px-4 rounded transform transition duration-150 ease-in-out hover:scale-105"
      >
        Reviews
      </button>

      {showReview && <h1>👇🏽Reviews will show up under this line 👇🏽</h1>}
    </div>
  );
};

export default Review;
