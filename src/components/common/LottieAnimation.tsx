'use client';
import React from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieAnimationProps {
  src: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ src }) => {
  return (
    <DotLottieReact
      src={src}
      autoplay
      loop
      width={560}
      height={363}
    />
  );
};

export default LottieAnimation;
