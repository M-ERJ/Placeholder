import { RefObject, Dispatch, SetStateAction } from "react";

export interface TrackSeekerProps {
  seekerRef: RefObject<HTMLInputElement>;
  audioRef: RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

export interface TrackSpotlightProps {
  audioRef: RefObject<HTMLAudioElement>;
}

export interface MusicControlsProps {
  seekerRef: RefObject<HTMLInputElement>;
  audioRef: RefObject<HTMLAudioElement>;
  duration: number;
  setTimeProgress: Dispatch<SetStateAction<number>>;
}
