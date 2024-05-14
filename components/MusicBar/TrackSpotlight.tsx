import { BsImageFill } from "react-icons/bs";

export default function TrackSpotlight({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement>;
}) {
  return (
    <div className="flex items-center gap-4">
      <BsImageFill className="text-4xl" />
      <div>
        <p className="font-semibold">Track Name</p>
        <p className="text-sm">Artist Name</p>
      </div>
    </div>
  );
}
