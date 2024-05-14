import { useState, useEffect } from "react";
import {
  FaCirclePlay,
  FaCirclePause,
  FaShuffle,
  FaRepeat,
} from "react-icons/fa6";
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";

export default function MusicControls({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);

  return (
    <div className="flex items-center gap-4 text-3xl">
      <button>
        <FaShuffle />
      </button>
      <button>
        <IoPlaySkipBack />
      </button>
      <button>
        {isPlaying ? (
          <FaCirclePause
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-pi-purple-main/90 hover:text-pi-purple-main/100 transition-all"
          />
        ) : (
          <FaCirclePlay
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-pi-purple-main/90 hover:text-pi-purple-main/100 transition-all"
          />
        )}
      </button>
      <button>
        <IoPlaySkipForward />
      </button>
      <button>
        <FaRepeat />
      </button>
    </div>
  );
}
