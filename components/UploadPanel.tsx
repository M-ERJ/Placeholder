import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function UploadPanel() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <h1>YOU NEED TO LOGIN</h1>;
  }
  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Upload your song</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="mp3File" className="block text-gray-700">
            MP3 File:
          </label>
          <input
            type="file"
            id="mp3File"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            accept=".mp3"
          />
        </div>
        <div>
          <label htmlFor="albumCover" className="block text-gray-700">
            Album Cover Art:
          </label>
          <input
            type="file"
            id="albumCover"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            accept="image/*"
          />
        </div>
        <div>
          <label htmlFor="songName" className="block text-gray-700">
            Song Name:
          </label>
          <input
            type="text"
            id="songName"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-pi-purple-main text-white rounded-md hover:bg-blue-600 w-full"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
