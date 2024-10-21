"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import RightArrow from "../../assets/svgs/right-arrow.svg";

const DynamicLottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player), 
  { ssr: false } 
);

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface SalesSectionProps {
  mainHeading: string;
  subHeading: string;
  description?: string;
  ctaText: string;
  secondaryCtaText?: string;
  testimonial?: Testimonial;
  lottieUrl: string;
  isReversed?: boolean;
  route: string;
}

const TextBlock: React.FC<SalesSectionProps> = ({
  mainHeading,
  subHeading,
  description,
  ctaText,
  secondaryCtaText,
  testimonial,
  lottieUrl,
  isReversed = false,
}) => {
  const router = useRouter();

  const handlePrimaryCtaClick = () => {
    router.push("/auth/login");
  };

  const handleSecondaryCtaClick = () => {
    console.log("Secondary CTA clicked");
  };

  const MemoizedLottiePlayer = useMemo(() => (
    <DynamicLottiePlayer
      src={lottieUrl}
      autoplay
      loop
      style={{ width: '100%', height: 'auto', maxWidth: '500px' }} 
    />
  ), [lottieUrl]);

  return (
    <section className="lg:py-12">
      <div
        className={`max-w-[1280px] mx-auto p-4 flex ${isReversed
          ? "flex-col-reverse lg:flex-row-reverse"
          : "flex-col-reverse lg:flex-row"
          } justify-between items-center`}
      >
        <div className="w-full lg:w-[50%]">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">{mainHeading}</h1>
          <p className="text-base sm:text-lg mb-6 text-gray-600">{subHeading}</p>
          {description && <p className="text-base sm:text-lg mb-6 text-gray-600">{description}</p>}
          <div className="flex flex-wrap justify-start gap-4 mb-8">
            <button
              className="flex gap-2 items-center bg-black rounded-full text-white px-6 py-3 max-[420px]:text-xs text-sm"
              onClick={handlePrimaryCtaClick}
            >
              <p>{ctaText}</p>
              <Image
                className="max-[365px]:hidden"
                src={RightArrow}
                alt="Right Arrow"
              />
            </button>
            {secondaryCtaText && (
              <button
                className="border border-gray-300 px-6 py-3 rounded-full text-sm"
                onClick={handleSecondaryCtaClick}
              >
                {secondaryCtaText}
              </button>
            )}
          </div>
          {testimonial && testimonial.quote && testimonial.author && testimonial.role && (
            <div className="testimonial text-left max-w-lg w-full lg:w-full mb-8">
              <blockquote className="text-gray-700 italic text-sm">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <cite className="text-xs text-gray-500 not-italic">
                <span className="text-black">{testimonial.author}</span> -{" "}
                {testimonial.role}
              </cite>
            </div>
          )}
        </div>

        <div className="md:pb-10 lg:pb-0 relative flex max-lg:justify-center justify-end items-center w-full lg:w-[50%] h-64 sm:h-96">
          {MemoizedLottiePlayer}
        </div>
      </div>
    </section>
  );
};

export default React.memo(TextBlock);