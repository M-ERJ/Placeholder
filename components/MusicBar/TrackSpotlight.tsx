import { BsImageFill } from "react-icons/bs";
import { TrackSpotlightProps } from "@/models/interfaces/musicPlayer";
import { useEffect, useState } from "react";

export default function TrackSpotlight({ audioRef }: TrackSpotlightProps) {
  const [currentTrackData, setCurrentTrackData] = useState({
    trackName: "",
    artistName: "placeholder",
    albumCover: "",
  });

  useEffect(() => {
    const trackName = audioRef.current?.title || "Placeholder Track";

    setCurrentTrackData({ ...currentTrackData, trackName: trackName });
  }, []);

  return (
    <div className="flex items-center gap-4">
      <BsImageFill className="text-4xl" />
      <div>
        <p className="font-semibold">{currentTrackData.trackName}</p>
        <p className="text-sm">Artist Name</p>
      </div>
    </div>
  );
}
