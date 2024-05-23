"use client";
import { useEffect } from "react";
import { Database } from "@/types_db";
import Image from "next/image";
import useCurrentSong from "@/stores/useCurrentSong";
import { FaHeart, FaTimes } from "react-icons/fa";
import { useSongs } from "@/hooks/useSongs";
import { useAuth } from "@/hooks/useAuth";
import { createClient } from "@/utils/supabase/component";

const supabase = createClient();

type Song = Database["public"]["Tables"]["songs"]["Row"];

const DiscoverList = () => {
  const { user } = useAuth();
  const { songs: songList, error, isLoading } = useSongs();
  const { currentSong, setCurrentSong } = useCurrentSong();

  const handlePlay = async (song: Song) => {
    await fetch("/api/current-song", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ song }),
    });
    setCurrentSong(song);
  };

  const playRandomSong = () => {
    if (songList && songList.length > 0) {
      const randomNum = Math.floor(Math.random() * songList.length);
      handlePlay(songList[randomNum]);
    }
  };

  const handleLike = async (song: Song) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from("liked_songs")
        .insert({ user_id: user.id, song_id: song.id });

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("Error liking song:", error);
    }
  };

  useEffect(() => {
    if (songList && songList.length > 0) {
      playRandomSong();
    }
  }, [songList]);

  if (error) return <div>Failed to load song list</div>;

  if (isLoading && !currentSong)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  const imageUrl = currentSong?.image_path
    ? `https://fpaeregzmenbrqdcpbra.supabase.co/storage/v1/object/public/images/${currentSong.image_path}`
    : "";

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden h-screen w-full bg-pi-offwhite-main">
      <div className="relative z-10 mb-32 flex flex-col items-center justify-center h-[90vh] w-[90vw] max-w-md max-h-[90vh] p-4 bg-opacity-50 rounded-lg isolate aspect-video w-96 rounded-xl bg-black/20 shadow-lg ring-1 ring-black/5">
        {currentSong?.image_path && (
          <Image
            src={imageUrl}
            alt={currentSong.title || "Current Song"}
            width={300}
            height={300}
            className="rounded-lg object-cover mb-6"
          />
        )}
        <div className="absolute top-4 left-4 text-left text-white">
          <h2 className="text-2xl font-bold mb-2">{currentSong?.title}</h2>
          <p className="text-lg">{currentSong?.author}</p>
        </div>
        <div className="absolute bottom-10 flex space-x-32">
          <button
            className="text-5xl text-white p-4 bg-gray-900 bg-opacity-50 rounded-full"
            onClick={playRandomSong}
          >
            <FaTimes />
          </button>
          <button
            className="text-5xl text-white p-4 bg-pi-purple-main rounded-full "
            onClick={() => {
              if (currentSong) {
                handleLike(currentSong);
                playRandomSong();
              }
            }}
          >
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverList;
