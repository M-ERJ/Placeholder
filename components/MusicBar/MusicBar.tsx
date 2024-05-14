"use client";
import { useEffect, useState, useRef } from "react";
import MusicControls from "./MusicControls";
import TrackSeeker from "./TrackSeeker";
import TrackSpotlight from "./TrackSpotlight";
import VolumeSlider from "./VolumeSlider";

export default function MusicBar() {
  const audioRef = useRef<HTMLAudioElement>(null);
  console.log(audioRef);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current?.duration || 0);
      });
    }
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);

  const [duration, setDuration] = useState(0);

  return (
    <div
      className="
      min-w-[100vw]
      absolute bottom-4 left-0 z-50"
    >
      <div
        className="
      flex justify-between items-center 
      bg-white border-gray-200 rounded-lg 
      border shadow-md
      mx-4 p-4"
      >
        <TrackSpotlight audioRef={audioRef} />
        <div className="flex flex-col items-center gap-2">
          <audio preload="metadata" ref={audioRef}>
            <source src="https://fpaeregzmenbrqdcpbra.supabase.co/storage/v1/object/sign/songs/Midnight%20Rhapsody.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9NaWRuaWdodCBSaGFwc29keS5tcDMiLCJpYXQiOjE3MTUyNTY5MjYsImV4cCI6MTcxNTM0MzMyNn0.vzuccN_hMc-MWAmezykKOgeTjDjWhtsZjjeafpP8e0s&t=2024-05-09T12%3A15%3A27.578Z" />
          </audio>
          <MusicControls audioRef={audioRef} />
          <TrackSeeker audioRef={audioRef} duration={duration} />
        </div>
        <VolumeSlider audioRef={audioRef} />
      </div>
    </div>
  );
}
