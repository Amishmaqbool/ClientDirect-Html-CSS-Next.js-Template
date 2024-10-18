"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import PlayIcon from "@/assets/svgs/play-icon.svg";
import Thumbnail from "@/assets/images/thumbnail.png";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoRef: React.RefObject<HTMLVideoElement>;
  showControls: boolean;
  handlePause: () => void;
}

function VideoModal({
  isOpen,
  onClose,
  videoRef,
  showControls,
  handlePause,
}: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex justify-center items-center bg-black bg-opacity-30"
      onClick={onClose}
    >
      <div className="relative w-[93%]" onClick={(e) => e.stopPropagation()}>
        <video
          className="w-full max-h-[96vh] rounded-md object-cover"
          ref={videoRef}
          controls={showControls}
          onPause={handlePause}
          onEnded={handlePause}
          autoPlay
        >
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" />
        </video>
      </div>
    </div>
  );
}

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const handlePlay = () => {
    setIsFullscreen(true);
    setShowControls(true);
    setHasPlayed(true);
    document.body.style.overflow = "hidden";
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleClickOutside = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsFullscreen(false);
      setHasPlayed(false);
      document.body.style.overflow = "";
    }
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

        <VideoModal
          isOpen={isFullscreen}
          onClose={handleClickOutside}
          videoRef={videoRef}
          showControls={showControls}
          handlePause={handlePause}
        />
      </div>
    </div>
  );
}
