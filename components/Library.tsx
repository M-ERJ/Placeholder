import React, { useState } from "react";

const UploadedSongs: React.FC = () => {
  const [showSongs, setShowSongs] = useState<boolean>(false);

  const handleToggle = (): void => {
    setShowSongs(!showSongs);
  };

  return (
    <div className="container" style={{ display: "inline" }}>
      <button
        onClick={handleToggle}
        className="mt-4 bg-pi-purple-main text-white font-bold py-2 px-4 rounded transform transition duration-150 ease-in-out hover:scale-105"
      >
        Library
      </button>

      {showSongs && <h1>Uploaded Songs Go Down Below</h1>}
    </div>
  );
};

export default UploadedSongs;
