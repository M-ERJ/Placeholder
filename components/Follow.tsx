import React, { useState } from "react";

const Followbtn: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="container" style={{ display: "inline" }}>
      <button
        className={`mt-4 font-bold py-2 px-4 rounded transform transition duration-150 ease-in-out hover:scale-105 ${isFollowing ? "bg-white text-pi-purple-main" : "bg-pi-purple-main text-white"}`}
        onClick={toggleFollow}
      >
        {isFollowing ? "✔" : "+"}
      </button>
      {/*<div className="mt-4 h-1 bg-gray-300 w-full"></div>*/}
    </div>
  );
};

export default Followbtn;
