"use client";
import React from "react";

const UploadForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="mp3File" className="block text-gray-700">
          MP3 File:
        </label>
        <input
          type="file"
          id="mp3File"
          name="mp3File"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          accept=".mp3"
          onChange={() => console.log("audio file changed")}
        />
      </div>
      <div>
        <label htmlFor="albumCover" className="block text-gray-700">
          Album Cover Art:
        </label>
        <input
          type="file"
          id="albumArt"
          name="albumArt"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          accept="image/*"
          onChange={() => console.log("album art file changed")}
        />
      </div>
      <div>
        <label htmlFor="songName" className="block text-gray-700">
          Song Name:
        </label>
        <input
          type="text"
          id="songName"
          name="songName"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      <button
        type="submit"
        className="py-2 px-4 bg-pi-purple-main text-white rounded-md hover:bg-blue-600 w-full"
        onClick={() => console.log("submitting")}
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
