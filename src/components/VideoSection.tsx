"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import PlayIcon from "@/assets/svgs/play-icon.svg";
import Thumbnail from "../../public/subtitle.png";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  showControls: boolean;
}

function VideoModal({
  isOpen,
  onClose,
  showControls,
}: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-30"
      onClick={onClose}
    >
      <div
        className="relative w-[93%]"
        onClick={(e) => e.stopPropagation()}
      >
        <ReactPlayer
          url="./video.mp4"
          playing={true}
          controls={showControls}
          width="100%"
          height="100%"
          className="w-full h-[96vh] rounded-md object-cover"
        />
      </div>
    </div>
  );
}

export default function VideoSection() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlay = () => {
    setIsFullscreen(true);
    setShowControls(true);
    setHasPlayed(true);
    document.body.style.overflow = "hidden";
  };

  const handlePauseAndClose = () => {
    setIsFullscreen(false);
    setHasPlayed(false);
    document.body.style.overflow = "";
  };

  return (
    <div className="mt-10 sm:mt-16 max-w-[1280px] mx-auto px-6">
      <div className="relative">
        {!hasPlayed && (
          <div className="relative cursor-pointer" onClick={handlePlay}>
            <Image
              src={Thumbnail}
              alt="Thumbnail"
              className="object-cover rounded-md w-full h-full"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <Image
                src={PlayIcon}
                alt="Play Icon"
                className="cursor-pointer w-10 sm:w-[100px] h-10 sm:h-[100px]"
              />
            </div>
          </div>
        )}

        <div>
        <VideoModal
          isOpen={isFullscreen}
          onClose={handlePauseAndClose} 
          showControls={showControls}
        />
        </div>
      </div>
    </div>
  );
}