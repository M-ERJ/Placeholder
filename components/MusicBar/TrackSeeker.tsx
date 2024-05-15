import { useEffect, useState } from "react";
import { TrackSeekerProps } from "@/models/interfaces/musicPlayer";

const calculateTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

export default function TrackSeeker({
  seekerRef,
  audioRef,
  timeProgress,
  duration,
  setDuration,
}: TrackSeekerProps) {
  const [trackerData, setTrackerData] = useState({
    maxDuration: "0:00",
  });

  useEffect(() => {
    console.log("Duration updated:", duration);
    setTrackerData({ ...trackerData, maxDuration: calculateTime(duration) });
  }, [duration]);

  const handleChange = () => {
    if (audioRef.current && seekerRef.current) {
      audioRef.current.currentTime = Number(seekerRef.current.value);
    }
  };

  return (
    <div className="flex gap-2 text-sm">
      <span>{calculateTime(timeProgress)}</span>
      <input
        className="w-96 accent-pi-purple-main transition-all border-none"
        type="range"
        max={duration}
        defaultValue={0}
        onChange={handleChange}
        ref={seekerRef}
      />
      <span>{trackerData.maxDuration}</span>
    </div>
  );
}
