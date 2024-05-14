"use client";
import { useState } from "react";

const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

export default function TrackSeeker({
  audioRef,
  duration,
}: {
  duration: number;
  audioRef: React.RefObject<HTMLAudioElement>;
}) {
  const [value, setValue] = useState(calculateTime(duration));

  const temp = audioRef;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex gap-2 text-sm">
      <span>{value}</span>
      <input
        className="w-96 accent-pi-purple-main transition-all border-none"
        type="range"
        max={Math.floor(duration)}
        value={value}
        step="0.01"
        onChange={handleChange}
      />
      <span>{Math.floor(duration)}</span>
    </div>
  );
}
